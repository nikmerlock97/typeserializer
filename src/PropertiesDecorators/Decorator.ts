import { isUndefined } from '../helpers';

export function createDecorator(name: string, keySymbol: Symbol, value: any) {
  return function<T>(target: T, key: keyof T) {
    const obj = Reflect.getMetadata(keySymbol, target) || {};

    if (!isUndefined(obj[key])) {
      throw new Error(
        `Cannot apply @${name} decorator twice on property '${key}' of class '${(target as any).constructor.name}'.`
      );
    }

    Reflect.defineMetadata(keySymbol, { ...obj, ...{ [key]: value } }, target);
  };
}
