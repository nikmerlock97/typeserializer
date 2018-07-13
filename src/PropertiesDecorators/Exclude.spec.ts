
import 'mocha';
import {expect} from 'chai';
import {Exclude} from './Exclude';
import {serialize} from '../Serializer/Serializer';
import {expect} from "chai";

class Foo {

  @Exclude()
  prop: string = 'prop';

  prop2: string = 'prop2';

  @Exclude()
  prop3: string = 'prop3';
}

describe('Exclude', () => {

  it('should exclude properties while serializing', () => {
    const foo = new Foo();
    expect(serialize(foo)).to.equal('');
  });

});
