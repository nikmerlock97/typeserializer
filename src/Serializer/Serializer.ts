import {ExcludeSymbol} from '../consts';


export function serialize(obj: any) {
  const excludeList = Reflect.getMetadata(ExcludeSymbol, obj) || [];
  const excludeMap = excludeList.reduce((obj: any, { key, fn }: any) => (obj[key] = fn, obj), {});

  return Object.getOwnPropertyNames(obj).reduce((json: any, key: string) => {

    if (excludeMap.hasOwnProperty(key) && typeof excludeMap[key] !== 'undefined') {
      if (!excludeMap[key].call(null)) {
        json[key] = obj[key];
      }
    }

    if (!excludeMap.hasOwnProperty(key)) {
      json[key] = obj[key];
    }


    return json;
  }, {});
}
