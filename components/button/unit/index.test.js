import React from 'react';
import { mount } from 'enzyme';
import Button from '..';

// 分组
describe('测试Button', () => {
  it('测试Button是否能挂载', () => {
    expect(() => mount(<Button>Follow</Button>)).not.toThrow();
  });
});
