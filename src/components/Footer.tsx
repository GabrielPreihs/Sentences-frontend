import getConfig from "next/config";

export default function Footer() {
  const { publicRuntimeConfig } = getConfig();
  return <footer className="row-start-3 flex items-center justify-center flex-col w-full bg-gray-700 h-full text-white">
        Joseph AI
        <small>
          App Version: {publicRuntimeConfig?.version}
        </small>
      </footer>
}