// import CodeEditor from '@uiw/react-textarea-code-editor';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { createRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../UI/Loading/Loading';
//styled components

const ExampleWithCodeStyled = styled.div``;
const ComponentsDisplay = styled.div`
  display: flex;
  border: 3px solid #ececec;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: none;
  padding: 5px 10px;
`;
const ActiveComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ isActive }) => (isActive ? `2px solid #e0e3e8` : null)};
  border-radius: 5px;
  padding: 3px;
`;
// /styled components

const ExampleWithCode = ({ className, list = [] }) => {
  const [showId, setShowId] = useState(1);
  const activeComponentRef = createRef();
  const onComponentChange = useCallback((id, e) => {
    setShowId(id - 1);
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      {list.length ? (
        <ExampleWithCodeStyled className={className}>
          <ComponentsDisplay>
            {list.map((item) => {
              return (
                <ActiveComponent
                  ref={activeComponentRef}
                  isActive={item.id - 1 === showId}
                  key={item.id}
                  onClick={onComponentChange.bind(this, item.id)}
                >
                  {{
                    ...item.element,
                    props: {
                      ...item.element.props,
                    },
                  }}
                </ActiveComponent>
              );
            })}
          </ComponentsDisplay>
          <CodeEditor
            value={list[showId].code}
            language="js"
            placeholder="Please enter JS code."
            // onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 14,
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              backgroundColor: '#282c34',
              fontFamily:
                'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </ExampleWithCodeStyled>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default ExampleWithCode;
