'use client';

export default function Error({ error }: { error: Error }) {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 my-5">
            <h2 className="text-xl font-bold text-green-600">
                Pleas Tey Agin 😥
            </h2>
            <p className="text-gray-500">
                Or Cheek Your Internet
            </p>
        </div>
    );
}