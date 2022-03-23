/**
 * @desc 上传控件，默认自带的input样式
 * @author {pengdaokuan}
 */
import React, { useRef } from 'react';
import FileEvent from './fileEvent';

function Upload({ style, accept, multiple = false, visible = true, onAfterClick, onAfterChange }) {
  const inputSelectorRef = useRef(null);

  function onChange(e) {
    const fileList = e?.target?.files || [];
    if (e.target.value === '') {
      return;
    }
    let instance = [];
    // fileList 属于 [object FileList] 类型
    for (let file of fileList) {
      instance.push(new FileEvent(file));
    }
    onAfterChange && onAfterChange(instance);
  }

  return (
    <input
      type="file"
      style={style}
      accept={accept}
      multiple={multiple}
      ref={inputSelectorRef}
      onClick={onAfterClick}
      onChange={onChange}
    />
  );
}

export default Upload;