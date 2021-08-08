export default (state, action) => {
  switch (action.type) {
    case "REMOVE_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => {
          return card.id !== action.payload;
        }),
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [action.payload, ...state.cards],
      };
    case "EDIT_CARD":
      const updateCard = action.payload;

      const updateCards = state.cards.map((card) => {
        if (card.id === updateCard.id) {
          return updateCard;
        }
        return card;
      });
      return {
        ...state,
        users: updateCards,
      };

    default:
      return state;
  }
};
