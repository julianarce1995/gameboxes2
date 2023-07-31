import { type FC } from 'react';

import { ColorBlock } from 'src/types/colorType';

interface BlockProps {
  colorBlock: ColorBlock;
  id: string;
  selected?: string;
  handleClick: (colorBlock: ColorBlock, id: string) => void;
}

const Block: FC<BlockProps> = ({ colorBlock, id, selected, handleClick }) => {
  return (
    <div
      id={id}
      onClick={() => handleClick(colorBlock, id)}
      className={selected === id ? colorBlock + ' ' + 'selected' : colorBlock}
    ></div>
  );
};

export default Block;
