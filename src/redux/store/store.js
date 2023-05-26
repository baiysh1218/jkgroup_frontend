const store = configureStore({
  reducer: { products: ProductsSlicer },
  exptraReducer: {},
});

export default store;
