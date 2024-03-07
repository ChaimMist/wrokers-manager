

export const ErrorPage = (error:any) => {
    return (
        <div>
            <h1>Error occurred</h1>
            <h2>{error.message}</h2>
        </div>
    )
}