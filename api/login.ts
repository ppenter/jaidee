export const GET = (req: any, res: any) => {
    res.cookie('user', 'Jarupak', { httpOnly: true });
    res.send('Login success');
}