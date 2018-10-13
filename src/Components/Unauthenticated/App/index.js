import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from 'styles/App/styles';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>
            Initiating Ecommerce Website...
          </Title>
        </Wrapper>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
