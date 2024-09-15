import { House, LogOut, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside
      className="fixed w-64 border-r border-gray-200"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col p-6">
          <div className="flex items-center gap-2 p-3 font-medium rounded-xl text-oca-red bg-neutral-100">
            <House className="size-5" />
            Dashboard
          </div>
          <div className="flex items-center gap-2 p-3 font-medium rounded-xl text-oca-red">
            <House className="size-5" />
            Sales Summary
          </div>
          <div className="flex items-center gap-2 p-3 font-medium rounded-xl text-oca-red">
            <House className="size-5" />
            Task Management
          </div>
          <div className="flex items-center gap-2 p-3 font-medium rounded-xl text-oca-red">
            <House className="size-5" />
            Sales Details
          </div>
          <div className="flex items-center gap-2 p-3 font-medium rounded-xl text-oca-red">
            <House className="size-5" />
            Submission History
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex flex-col p-6 mb-6 border-b border-neutral-200">
            <div className="flex items-center gap-2 p-2 font-medium rounded-xl text-neutral-500">
              <Settings className="size-5 text-oca-red" />
              Settings
            </div>
            <div className="flex items-center gap-2 p-2 font-medium rounded-xl text-neutral-500">
              <LogOut className="size-5 text-oca-red" />
              Logout
            </div>
          </div>
          <div className="flex items-center gap-2 p-6 pt-0 mb-6">
            <div className="flex items-center justify-center text-xl text-white bg-blue-500 rounded-full size-10">
              S
            </div>
            <div className="flex flex-col">
              <h2 className="font-medium">Samantha</h2>
              <p className="text-xs">Samantha12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
