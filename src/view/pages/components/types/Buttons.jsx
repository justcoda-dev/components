// styled components
import styled from 'styled-components';
import Button from '../../../../components/CustomUI/Button/Button';
import ExampleWithCode from '../../../../components/ExampleWithCode/ExampleWithCode';
import FirstTitle from '../../../../components/UI/FirstTitle/FirstTitle';
import SecondTitle from '../../../../components/UI/SecondTitle/SecondTitle';
import Text from '../../../../components/UI/Text/Text';

const ButtonsWrapper = styled.div``;
const ButtonsItem = styled.div`
  margin: 20px 0;
`;
// /styled components
// lists
const buttonTypesList = [
  {
    id: 1,
    element: <Button type="success">Succsess</Button>,
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button type="succsess">Succsess</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 2,
    element: <Button type="dark">Dark</Button>,
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button type="dark">Dark</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 3,
    element: <Button type="light">Light</Button>,
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button type="light">Light</Button>;\n ' +
      'export default Example;',
  },

  {
    id: 4,
    element: <Button type="danger">Danger</Button>,
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button type="danger">Danger</Button>;\n ' +
      'export default Example;',
  },
];
const buttonOutlineList = [
  {
    id: 1,
    element: (
      <Button outline type="success">
        Succsess
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button outline type="succsess">Succsess</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 2,
    element: (
      <Button outline type="dark">
        Dark
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button outline type="dark">Dark</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 3,
    element: (
      <Button outline type="light">
        Light
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button outline type="light">Light</Button>;\n ' +
      'export default Example;',
  },

  {
    id: 4,
    element: (
      <Button outline type="danger">
        Danger
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button outline type="danger">Danger</Button>;\n ' +
      'export default Example;',
  },
];
const buttonSizeList = [
  {
    id: 1,
    element: (
      <Button type="success" size="small">
        Small
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button type="succsess" size="small">Small</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 2,
    element: (
      <Button type="success" size="medium">
        Medium
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button type="succsess" size="medium">Medium</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 3,
    element: (
      <Button type="success" size="large">
        Large
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button type="succsess" size="large">Large</Button>;\n ' +
      'export default Example;',
  },
];
const buttonDisabledList = [
  {
    id: 1,
    element: (
      <Button disabled type="success">
        Succsess
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button disabled type="succsess">Succsess</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 2,
    element: (
      <Button disabled type="dark">
        Dark
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button disabled type="dark">Dark</Button>;\n ' +
      'export default Example;',
  },
  {
    id: 3,
    element: (
      <Button disabled type="light">
        Light
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button disabled type="light">Light</Button>;\n ' +
      'export default Example;',
  },

  {
    id: 4,
    element: (
      <Button disabled type="danger">
        Danger
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button disabled type="danger">Danger</Button>;\n ' +
      'export default Example;',
  },
];
const buttonLoadingList = [
  {
    id: 1,
    element: (
      <Button loadStatus type="success">
        Succsess
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n " +
      'const Example = () => <Button loadStatus="true"  type="succsess">Succsess</Button>;\n' +
      'export default Example;',
  },
  {
    id: 2,
    element: (
      <Button loadStatus type="dark">
        Dark
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button loadStatus="true" type="dark">Dark</Button>;\n' +
      'export default Example;',
  },
  {
    id: 3,
    element: (
      <Button loadStatus type="light">
        Light
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button loadStatus="true" type="light">Light</Button>;\n' +
      'export default Example;',
  },

  {
    id: 4,
    element: (
      <Button loadStatus type="danger">
        Danger
      </Button>
    ),
    code:
      "import Button from '../../components/CustomUI/Button/Button';\n" +
      ' const Example = () => <Button loadStatus="true" type="danger">Danger</Button>;\n' +
      ' export default Example;',
  },
];
// /lists

const Buttons = () => {
  return (
    <ButtonsWrapper>
      <FirstTitle>Buttons</FirstTitle>
      <Text>
        Use custom button styles for actions in forms, dialogs, and more with
        support for multiple sizes, states, and more.
      </Text>
      <ButtonsItem>
        <SecondTitle>Examples</SecondTitle>
        <Text>
          Use any of the available button style types to quickly create a styled
          button. Just modify the variant prop.
        </Text>
        <ExampleWithCode list={buttonTypesList} />
      </ButtonsItem>

      <ButtonsItem>
        <SecondTitle> Outline buttons</SecondTitle>
        <Text>
          For a lighter touch, Buttons also come in outline-* variants with no
          background color.
        </Text>
        <ExampleWithCode list={buttonOutlineList} />
      </ButtonsItem>

      <ButtonsItem>
        <SecondTitle> Sizes</SecondTitle>
        <Text>
          Fancy larger or smaller buttons? Add size="small", size="medium",
          size="large" for additional sizes.
        </Text>
        <ExampleWithCode list={buttonSizeList} />
      </ButtonsItem>
      <ButtonsItem>
        <SecondTitle>Disabled state</SecondTitle>
        <Text>Make buttons look inactive by adding the disabled prop to.</Text>
        <ExampleWithCode list={buttonDisabledList} />
      </ButtonsItem>
      <ButtonsItem>
        <SecondTitle>Button loading state</SecondTitle>
        <Text>
          Button loading state# When activating an asynchronous action from a
          button it is a good UX pattern to give the user feedback as to the
          loading state, this can easily be done by updating your {`<Button />`}
          props from a state change like below.
        </Text>
        <ExampleWithCode list={buttonLoadingList} />
      </ButtonsItem>
    </ButtonsWrapper>
  );
};

export default Buttons;
