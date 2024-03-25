import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllProductsAsync,
  getProductsByFilterAsync,
  getAllCategoriesAsync,
  getAllBrandsAsync,
  getProductByIdAsync,
  createProductAsync,
  updateProductAsync,
} from "./product.async";

const initialState = {
  productLoader: false,
  productData: [],
  filterLoader: false,
  filterProduct: [],
  categories: [],
  brands: [],
  productByIdLoader: false,
  productById: [],
  createProdLoader: false,
  createProduct: [],
  updateProdLoader: false,
  updatedProd: [],
};

export const productSlice = createSlice({
  name: "activity",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(getAllProductsAsync.pending), (state) => {
      state.productLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getAllProductsAsync.fulfilled),
      (state, action) => {
        state.productLoader = false;
        state.productData = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getAllProductsAsync.rejected),
      (state, action) => {
        state.productLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(getProductsByFilterAsync.pending), (state) => {
      state.filterLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getProductsByFilterAsync.fulfilled),
      (state, action) => {
        state.filterLoader = false;
        state.productData = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getProductsByFilterAsync.rejected),
      (state, action) => {
        state.filterLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(getAllCategoriesAsync.pending), (state) => {
      state.productLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getAllCategoriesAsync.fulfilled),
      (state, action) => {
        state.productLoader = false;
        state.categories = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getAllCategoriesAsync.rejected),
      (state, action) => {
        state.productLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(getAllBrandsAsync.pending), (state) => {
      state.productLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getAllBrandsAsync.fulfilled),
      (state, action) => {
        state.productLoader = false;
        state.brands = action.payload;
      }
    );
    builder.addMatcher(isAnyOf(getAllBrandsAsync.rejected), (state, action) => {
      state.productLoader = false;
    });

    builder.addMatcher(isAnyOf(getProductByIdAsync.pending), (state) => {
      state.productByIdLoader = true;
    });
    builder.addMatcher(
      isAnyOf(getProductByIdAsync.fulfilled),
      (state, action) => {
        state.productByIdLoader = false;
        state.productById = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(getProductByIdAsync.rejected),
      (state, action) => {
        state.productByIdLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(createProductAsync.pending), (state) => {
      state.createProdLoader = true;
    });
    builder.addMatcher(
      isAnyOf(createProductAsync.fulfilled),
      (state, action) => {
        state.createProdLoader = false;
        state.createProduct = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(createProductAsync.rejected),
      (state, action) => {
        state.createProdLoader = false;
      }
    );

    builder.addMatcher(isAnyOf(updateProductAsync.pending), (state) => {
      state.updateProdLoader = true;
    });
    builder.addMatcher(
      isAnyOf(updateProductAsync.fulfilled),
      (state, action) => {
        state.updateProdLoader = false;
        state.updatedProd = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(updateProductAsync.rejected),
      (state, action) => {
        state.updateProdLoader = false;
      }
    );
  },
  reducers: {
    emptyactivity: (state) => initialState,
  },
});

export const { emptyactivity } = productSlice.actions;
export default productSlice.reducer;
