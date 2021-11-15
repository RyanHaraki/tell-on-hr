import Image from "next/image";
import Issue from "../components/Issue";
import issues from "../dummydata";
import Link from "next/link";

const Issues = () => {
  return (
    <div class>
      <div className="flex align-center justify-center items-center p-3 bg-headerColor bg-opacity-50">
        <img src="/LOGO1.svg" width={100} height={50} />
        <Link href="/">
          <p className="font-bold px-5 text-white text-xl hover:text-gray-300 cursor-pointer">
            TELLONHR
          </p>
        </Link>
        <Link href="/issues">
          <p className="text-white text-xl font-bold hover:text-gray-300 cursor-pointer px-5">
            View Issues
          </p>
        </Link>
      </div>

      <div class="bg-gray-200 px-48 py-8">
        {issues.map((issue, index) => {
          return issue.active ? (
            <div className="my-2 bg-white rounded-md block text-gray text-xl text-left px-8 py-3 font-bold">
              <Issue key={index} text={issue.text} />
            </div>
          ) : (
            <div className="my-2 bg-white rounded-md block text-gray text-xl text-left px-8 py-3">
              <div className="font-bold">
                <Issue key={index} text={issue.text} />
              </div>
              <div className="flex text-sm items-center align-left">
                <img src="/LOGO1.svg" width={50} height={25} />
                {issue.response}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  exp;
};

export default Issues;
