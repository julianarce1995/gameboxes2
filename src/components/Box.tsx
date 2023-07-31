import { type FC, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  selectFirstColor,
  selectFirstId,
} from 'src/store/selectors/firstSelector';
import { selectSecColor, selectSecId } from 'src/store/selectors/secSelector';
import { setFirstBoxInfo } from 'src/store/slices/firstSlice';
import { setSecBoxInfo } from 'src/store/slices/secSlice';
import { ColorBlock } from 'src/types/colorType';

import Block from './Block';
import Column from './Column';

const Box: FC = () => {
  const [colorBlock1, setColorBlock1] = useState(ColorBlock.YELLOW);
  const [colorBlock2, setColorBlock2] = useState(ColorBlock.BLUE);
  const [colorBlock3, setColorBlock3] = useState(ColorBlock.GRAY);
  const [colorBlock4, setColorBlock4] = useState(ColorBlock.RED);
  const [colorBlock5, setColorBlock5] = useState(ColorBlock.GRAY);
  const [colorBlock6, setColorBlock6] = useState(ColorBlock.GRAY);
  const [selected, setSelected] = useState<string>('');
  const firstBoxIdSelected = useAppSelector(selectFirstId);
  const secBoxIdSelected = useAppSelector(selectSecId);
  const firstColorBlockSelected = useAppSelector(selectFirstColor);
  const secColorBlockSeleceted = useAppSelector(selectSecColor);

  const dispatch = useAppDispatch();

  function handleClick(colorBlock: ColorBlock, id: string) {
    if (!firstBoxIdSelected) {
      dispatch(setFirstBoxInfo({ colorBlock, id, selected }));
      setSelected(id);
    } else if (
      firstBoxIdSelected &&
      id !== firstBoxIdSelected &&
      !secBoxIdSelected
    ) {
      dispatch(setSecBoxInfo({ colorBlock, id, selected }));
      setSelected('');
    } else {
      dispatch(setFirstBoxInfo({ colorBlock, id, selected }));
      setSelected(id);
      dispatch(setSecBoxInfo({ colorBlock: undefined, id: '', selected: '' }));
    }
  }
  useEffect(() => {
    if (firstBoxIdSelected && secBoxIdSelected) {
      switch (firstBoxIdSelected) {
        case '1':
          setColorBlock1(secColorBlockSeleceted as ColorBlock);
          break;
        case '2':
          setColorBlock2(secColorBlockSeleceted as ColorBlock);
          break;
        case '3':
          setColorBlock3(secColorBlockSeleceted as ColorBlock);
          break;
        case '4':
          setColorBlock4(secColorBlockSeleceted as ColorBlock);
          break;
        case '5':
          setColorBlock5(secColorBlockSeleceted as ColorBlock);
          break;
        case '6':
          setColorBlock6(secColorBlockSeleceted as ColorBlock);
          break;
        default:
          break;
      }
      switch (secBoxIdSelected) {
        case '1':
          setColorBlock1(firstColorBlockSelected as ColorBlock);
          break;
        case '2':
          setColorBlock2(firstColorBlockSelected as ColorBlock);
          break;
        case '3':
          setColorBlock3(firstColorBlockSelected as ColorBlock);
          break;
        case '4':
          setColorBlock4(firstColorBlockSelected as ColorBlock);
          break;
        case '5':
          setColorBlock5(firstColorBlockSelected as ColorBlock);
          break;
        case '6':
          setColorBlock6(firstColorBlockSelected as ColorBlock);
          break;
        default:
          break;
      }
    }
  }, [secBoxIdSelected]);

  return (
    <div className="box">
      <Column>
        <Block
          id="1"
          colorBlock={colorBlock1}
          selected={selected}
          handleClick={handleClick}
        />
        <Block
          id="2"
          colorBlock={colorBlock2}
          selected={selected}
          handleClick={handleClick}
        />
        <Block
          id="3"
          colorBlock={colorBlock3}
          selected={selected}
          handleClick={handleClick}
        />
      </Column>
      <Column>
        <Block
          id="4"
          colorBlock={colorBlock4}
          selected={selected}
          handleClick={handleClick}
        />
        <Block
          id="5"
          colorBlock={colorBlock5}
          selected={selected}
          handleClick={handleClick}
        />
      </Column>
      <Column>
        <Block
          id="6"
          colorBlock={colorBlock6}
          selected={selected}
          handleClick={handleClick}
        />
      </Column>
    </div>
  );
};

export default Box;
