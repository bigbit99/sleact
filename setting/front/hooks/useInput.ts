import { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;

//🔥ts로 시작하는 에러는 타입스크립트 에러
//🔥🔥ts가 js의 변수, 매개변수, return값에 타입을 붙여줘야함
//🔥🔥🔥특히 매개변수는 타입을 붙여줘야 에러가 안난다.
