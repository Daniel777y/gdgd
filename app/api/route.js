const { NextResponse } = require("next/server");

const GET = async () => {
    return NextResponse.json({ message: "Hello World" });
};

export { GET };