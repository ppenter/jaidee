import { getAppConfig } from "@/jaidee/utils";

export const getServerSideProps = async (context: any) => {
    const doctypes = ["Hi"]
    const config = await getAppConfig();
    console.log('config', config)
    return {
      doctypes,
      config
    };
}