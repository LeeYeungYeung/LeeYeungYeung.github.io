"use client"
export default function TextBox({
    title ,content, url}:{
        title:string,content:string, url:string
    }) {
    return (
        <a
          href={url}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title+' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`text-center m-0 max-w-[30ch] text-sm opacity-50`}> 
            {content+' '}
          </p>
          <p className={`text-center m-0 max-w-[30ch] text-sm opacity-50`}> 
            {"Click to Github"}
          </p>

        </a>
    )
}