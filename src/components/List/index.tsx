import { ReactNode, useState } from 'react';

interface ListProps {
initialValues:string[]
}

function List({ initialValues }: ListProps) {
  const [list, setList] = useState<string[]>(initialValues);
  const [value, setValue] = useState("");

  const addToList = () => {
    setTimeout(() => {
      setList((state) => [...state, value]);
    }, 1000);
  };

  const removeItem = (item:string) => {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== item));
    }, 1000);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={addToList}>
        Adicionar
      </button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item} <button onClick={() => removeItem(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
