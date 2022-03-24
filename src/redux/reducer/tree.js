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
      let { id } = data;
      state.tree = state.tree.filter((item) => item.id !== id);
      return state;
    case "UPDATE_COMPONENT_SETTINGS":
      state.tree = state.tree.map((item) => {
        if (item.id === data.id) {
          item.settings = data.settings;
        }
        return item;
      });
      return state;
    default:
      return state;
  }
};

export default tree;
