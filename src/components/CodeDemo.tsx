import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useState, useEffect } from 'react';

interface Props {
  filePath: string;
  language?: string;
  title?: string;
}
const CodeDemo = ({ filePath, language = 'javascript', title = '' }: Props) => {
  const [code, setCode] = useState('');
  const path = useBaseUrl(filePath);

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(data => {
        setCode(data);
      });
  }, [filePath]);

  return (
    <CodeBlock language={language} title={title}>
      {code}
    </CodeBlock>
  );
};

export default CodeDemo;
