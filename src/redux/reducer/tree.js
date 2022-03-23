const inialState = {
  tree: [],
};

/*
* tree : [{
    top:0,
    name:'Test',
    settings:[],
    id:"123"
}]
* 
**/

const tree = (state = inialState, actions) => {
  const { type, data } = actions;
  switch (type) {
    case "APPEND_COMPONENT":
      state.tree.push(data);
      return state;
    case "DELETE_COMPONENT":
      const { id } = data;
      state.tree = state.tree.filter((item) => item.id !== id);
      return state;
    default:
      return state;
  }
};

export default tree;
