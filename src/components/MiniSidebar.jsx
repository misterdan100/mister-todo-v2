import useTasks from "../hooks/useTasks";
import { MenuIcon } from '../assets/MenuIcon'

const MiniSidebar = () => {
  const { setShowSidebar } = useTasks();

  return (
    <>
      <div>
          <button 
          onClick={() => setShowSidebar(prev => !prev)}
          >
            <MenuIcon />
          </button>

      </div>
    </>
  );
};

export default MiniSidebar;
