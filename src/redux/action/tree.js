export const appendComponent = (data) => ({
  type: "APPEND_COMPONENT",
  data,
});

export const updateComponentSettings = (data) => ({
  type: "UPDATE_COMPONENT_SETTINGS",
  data,
});

export const pushFragment = (data) => ({
  type: "PUSH_FRAGMENT_COMPONENT",
  data,
});
