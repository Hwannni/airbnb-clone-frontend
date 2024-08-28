import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <h1>
      im root
      {/* Outlet은 루트의 중앙에 우리가 렌더링 하고싶은 컴포넌트를 위치시킨다. */}
      <Outlet />
    </h1>
  );
}