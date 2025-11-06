import clsx from "clsx";

interface DescriptionProps {
    visible?: boolean;
    showBadge?: boolean;
    badgeType?: "highlight" | "clients";
    badgeLabel?: string;
    clientsText?: string;
}

export default function Description({
    visible = true,
    showBadge = true,
    badgeType = "highlight",
    badgeLabel = "Highlight",
    clientsText = "150+ satisfied clients",
}: DescriptionProps) {
    return (
        <>
            {visible ? (
                <div className="head flex flex-col items-center">
                    {showBadge && (
                        <>
                            {badgeType === "highlight" ? (
                                <div
                                    className={clsx(
                                        "rounded-full py-1 px-3 w-fit mb-5 text-sm font-semibold",
                                        "bg-gray-100 text-gray-800"
                                    )}
                                >
                                    {badgeLabel}
                                </div>
                            ) : (
                                <div className="bg-muted rounded-full px-2 border-border border-[1px] w-fit mb-5">
                                    <div className="flex justify-center items-center">
                                        {/* {summary.lastSigned.map((user: { name: string; img_url: string }) => (
                                                <div title={user.name} key={user.name} className="user-img w-8">
                                                    <Image className="w-full h-full object-cover" src={user.img_url} alt="user" width={100} height={100} />
                                                </div>
                                            ))} */}
                                        <div className="ml-3 font-semibold text-sm">
                                            {clientsText.split(" ").slice(0, 1)}{" "}
                                            <span className="text-muted-foreground">
                                                {clientsText.replace(/^[^\s]+\s*/, "")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl text-center">
                        This is the title of this professional section!
                    </h1>
                </div>
            ) : null}
        </>
    );
}