import React from 'react';

import renderer from 'react-test-renderer';
import CategoryButton from '../src/components/CategoryButton';

describe('CategoryButton', () => {
  it('should render selected', () => {
    const render = renderer
      .create(<CategoryButton title="test" selected={true} id={'1'} />)
      .toJSON();

    expect(render).toMatchSnapshot();
  });

  it('should render selected false ', () => {
    const render = renderer
      .create(<CategoryButton title="test" selected={false} id={'1'} />)
      .toJSON();

    expect(render).toMatchSnapshot();
  });
});
