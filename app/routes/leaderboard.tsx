import { Text, Button, FrameHexagon } from "@arwes/core";
import { supabase } from "~/utils/supabaseClient";

export async function loader() {
    return getTeams();
  }
  
  export default function Teams() {
    return <TeamsView teams={useLoaderData()}>
  }