import Image from "next/image";

function DeveloperCard({fullName, avatar, jobTitle, experience, available}) {

    const variants= {
        Available: 'bg-green-300 rounded-md px-3 py-1 text-sm text-green-900',
        Unavailable: 'bg-rose-400 rounded-md px-3 py-1 text-sm text-slate-900'
    }

    return ( 
        <aside className="py-10 rounded-md shadow-sm border-2 border-zinc-300/100 w-[300px] px-4 bg-zinc-50">
            <header className="flex flex-col items-center mb-4">
                <Image src={avatar} alt={fullName} priority width={128} height={128}className="rounded-full" />
                <h2 className="text-2xl font-semibold text-zinc-700">{fullName}</h2>
            </header>

            <dl className="flex flex-col items-center text-zinc-700">
                <dt className="sr-only"></dt>
                <dd>{jobTitle}</dd>

                <dt className="sr-only"></dt>
                <dd>{experience} years of experience</dd>

                <dt className="sr-only"></dt>
                <dd className={ `${available? variants.Available : variants.Unavailable}`}>{available ? "Available":" Not Available"}</dd>
            </dl>
                {/* for availability, we use variants with conditional red/green styling based on the availability */}

        </aside>
    );
}

export default DeveloperCard;