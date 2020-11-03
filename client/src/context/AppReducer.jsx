export default (state, action) => {
  switch (action.type) {
    //***Backend input***
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    // ** Backend ends **
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        //** was switch for backend */
        transactions: [...state.transactions, action.payload],
      };
    //***Backend input***
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    // **Backend ends**
    default:
      return state;
  }
};
