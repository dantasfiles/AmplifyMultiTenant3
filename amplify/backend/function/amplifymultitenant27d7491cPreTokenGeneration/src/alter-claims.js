exports.handler = async (event, context, callback) => {
  // get old groups
  const groups = event.request.groupConfiguration.groupsToOverride;

  const tenant = ''; // ADD YOUR TENANT SELECTION LOGIC HERE

  // add tenant to groups
  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        groupsToOverride: [tenant, ...groups],
      },
    },
  };
  // Return to Amazon Cognito
  callback(null, event);
};
