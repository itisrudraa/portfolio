function DottedBackground() {
    return (
        <div
            className="
                absolute inset-x-0 top-0 h-40
                -z-10
                bg-[radial-gradient(#d1d5db_1px,transparent_1px)]
                bg-[size:6px_6px]
                opacity-60
                [mask-image:linear-gradient(to_bottom,black,transparent)]
            "
        />
    );
}

export default DottedBackground;