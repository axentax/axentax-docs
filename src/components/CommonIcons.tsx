import { LuPanelRightOpen } from "react-icons/lu";
import { FaPause, FaPlay } from "react-icons/fa";
import { BiArrowFromTop } from "react-icons/bi";
import { LuArrowLeftToLine } from "react-icons/lu";
import { FaFileDownload } from "react-icons/fa";

import { FaFilm } from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { MdOutlineTextDecrease } from "react-icons/md";
import { MdOutlineTextIncrease } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { VscScreenFull } from "react-icons/vsc";

import { SiCompilerexplorer } from "react-icons/si";

export const CompileButton = (props: React.ComponentProps<'svg'>) =>
  <SiCompilerexplorer size="20px" style={{ verticalAlign: '-0.25em' }}/>;

export const PauseButton = (props: React.ComponentProps<'svg'>) =>
  <FaPause size="20px" style={{ verticalAlign: '-0.25em' }}/>;

export const EraserButton = (props: React.ComponentProps<'svg'>) =>
  <FaEraser size="20px" style={{ verticalAlign: '-0.25em' }}/>;



