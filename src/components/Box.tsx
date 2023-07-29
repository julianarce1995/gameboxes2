import { type FC, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  selectFirstColor,
  selectFirstId,
} from 'src/store/selectors/firstSelector';
import { selectSecColor, selectSecId } from 'src/store/selectors/secSelector';
import { setFirstInfo } from 'src/store/slices/firstSlice';
import { setSecInfo } from 'src/store/slices/secSlice';
import { ColorBox } from 'src/types/colorType';

import Block from './Block';
import Column from './Column';

const Box: FC = () => {
  const [colorBox1, setColorBox1] = useState(ColorBox.YELLOW);
  const [colorBox2, setColorBox2] = useState(ColorBox.BLUE);
  const [colorBox3, setColorBox3] = useState(ColorBox.GRAY);
  const [colorBox4, setColorBox4] = useState(ColorBox.RED);
  const [colorBox5, setColorBox5] = useState(ColorBox.GRAY);
  const [colorBox6, setColorBox6] = useState(ColorBox.GRAY);
  const [selectedBox, setSelectedBox] = useState<string | undefined>(undefined);
  //const [isSelected, setIsSelected] = useState(true);
  const id1 = useAppSelector(selectFirstId);
  const id2 = useAppSelector(selectSecId);
  const color1 = useAppSelector(selectFirstColor);
  const color2 = useAppSelector(selectSecColor);
  let isSelected = 'selected';

  const dispatch = useAppDispatch();

  function handleClick(colorBox: ColorBox, id: string) {
    if (!id1) {
      dispatch(setFirstInfo({ colorBox, id, isSelected }));
      setSelectedBox(id);
    } else if (id1 && id !== id1 && !id2) {
      dispatch(setSecInfo({ colorBox, id, isSelected }));
      setSelectedBox('');
    } else {
      dispatch(setFirstInfo({ colorBox, id, isSelected }));
      setSelectedBox(id);
      dispatch(setSecInfo({ colorBox: undefined, id: '', isSelected: '' }));
    }
  }
  useEffect(() => {
    if (id1 && id2) {
      switch (id1) {
        case '1':
          setColorBox1(color2 as ColorBox);
          break;
        case '2':
          setColorBox2(color2 as ColorBox);
          break;
        case '3':
          setColorBox3(color2 as ColorBox);
          break;
        case '4':
          setColorBox4(color2 as ColorBox);
          break;
        case '5':
          setColorBox5(color2 as ColorBox);
          break;
        case '6':
          setColorBox6(color2 as ColorBox);
          break;
        default:
          break;
      }
      switch (id2) {
        case '1':
          setColorBox1(color1 as ColorBox);
          break;
        case '2':
          setColorBox2(color1 as ColorBox);
          break;
        case '3':
          setColorBox3(color1 as ColorBox);
          break;
        case '4':
          setColorBox4(color1 as ColorBox);
          break;
        case '5':
          setColorBox5(color1 as ColorBox);
          break;
        case '6':
          setColorBox6(color1 as ColorBox);
          break;
        default:
          break;
      }
    }
  }, [selectedBox, id2]);
  useEffect(() => {}, [id1, id2]);

  return (
    <div className="box">
      <Column>
        <Block
          id="1"
          colorBox={colorBox1}
          selected={selectedBox}
          handleClick={handleClick}
        />
        <Block
          id="2"
          colorBox={colorBox2}
          selected={selectedBox}
          handleClick={handleClick}
        />
        <Block
          id="3"
          colorBox={colorBox3}
          selected={selectedBox}
          handleClick={handleClick}
        />
      </Column>
      <Column>
        <Block
          id="4"
          colorBox={colorBox4}
          selected={selectedBox}
          handleClick={handleClick}
        />
        <Block
          id="5"
          colorBox={colorBox5}
          selected={selectedBox}
          handleClick={handleClick}
        />
      </Column>
      <Column>
        <Block
          id="6"
          colorBox={colorBox6}
          selected={selectedBox}
          handleClick={handleClick}
        />
      </Column>
    </div>
  );
};

export default Box;
