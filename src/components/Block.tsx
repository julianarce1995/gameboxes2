import { type FC } from 'react';

import { ColorBox } from 'src/types/colorType';

interface AdminAppBarProps {
  colorBox: ColorBox;
  id: string;
  selected?: string;
  handleClick: (colorBox: ColorBox, id: string) => void;
}

const Block: FC<AdminAppBarProps> = ({
  colorBox,
  id,
  selected,
  handleClick,
}) => {
  return (
    <div
      id={id}
      onClick={() => handleClick(colorBox, id)}
      className={selected === id ? colorBox + ' ' + 'selected' : colorBox}
    ></div>
  );
};

export default Block;
