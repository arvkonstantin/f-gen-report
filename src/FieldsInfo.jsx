import React from 'react';

export default function FieldsInfo() {
  const [fieldsInfo, setFieldsInfo] = React.useState('');

  React.useEffect(() => {
    fetch('/api/fieldsInfo', { method: 'GET' })
      .then((resp) => resp.text()
        .then((fieldInfo) => setFieldsInfo(fieldInfo)));
  }, []);

  return (
    fieldsInfo.toString()
  );
}
