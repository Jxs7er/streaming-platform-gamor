import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ForbiddenPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-5 items-center p-8">
      <div
        className="flex flex-col items-center justify-center gap-2 px-6 
      py-4 bg-red-50 rounded-md backdrop-blur-2xl"
      >
        <ExclamationTriangleIcon className="w-12 h-12 text-red-300" />
        <h4 className="text-lg font-semibold">Error 403 | Forbidden</h4>
      </div>
      <div className="p-6 backdrop-blur-3xl">
        <p className="text-xs font-medium">
          Ea eu minim pariatur adipisicing est dolor do. Laboris enim anim
          pariatur tempor ut ad velit labore officia ex eu. Qui incididunt do
          ullamco veniam officia ea amet minim irure. Do reprehenderit nisi
          irure ullamco.
        </p>
      </div>
      <div>
        <button>Go Back</button>
      </div>
    </div>
  );
};
export default ForbiddenPage;
