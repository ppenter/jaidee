export const GET = (req: any, res: any) => {
    // res.cookie('name', 'value', { httpOnly: true });
    res.clearCookie('name');
    res.send('GET /api/hello');
}