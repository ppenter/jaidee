import { getAppConfig } from "@/jaidee/utils";

export const getServerSideProps = async (context: any) => {
    const doctypes = ["Hi"]
    const config = await getAppConfig();
    const employees = [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Doe', age: 24 },
      { id: 3, name: 'John Smith', age: 28 },
    ]
    return {
      employees
    };
}