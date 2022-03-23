import { v4 as uuid } from "uuid";

class FileEvent {
  constructor(file) {
    this.file = file;
    this.uuid = uuid();
    const types = file?.type?.split("/") || [];
    this.fileType = types.length ? types[0] : "";
    /**
     * @description 本地预览地址
     */
    this.base64URL = window.URL.createObjectURL(file);
  }

  // 释放创建过的URL，不然会存在性能问题
  // 详情可见 : https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL
  revokeFileBase64URL(base64URL) {
    window.URL.revokeObjectURL(base64URL);
  }

  upload() {}
  cancel() {}
  retry() {}
}

export default FileEvent;
