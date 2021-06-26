export const getProgramsService = (
  launch_year,
  launch_success,
  land_success
) => {
  let url = "https://api.spacexdata.com/v3/launches?limit=100";
  if (launch_year) {
    url += `&launch_year=${launch_year}`;
  }
  if (land_success) {
    url += `&land_success=${land_success === "True" ? "true" : "false"}`;
  }
  if (launch_success) {
    url += `&launch_success=${launch_success === "True" ? "true" : "false"}`;
  }
  // if()
  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  });
};
