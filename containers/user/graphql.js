import { gql, useQuery, useMutation } from "@apollo/client";

export const USERS = gql`
  query users($page: Int, $per_page: Int, $sort: String, $q: String) {
    users(page: $page, per_page: $per_page, sort: $sort, q: $q) {
      id
      email
      name
      picture
      email_verified
      created_at
      last_login
      logins_count
    }
  }
`;

export const STATS = gql`
  query dailyUserActiveLogs($from: String!, $to: String!) {
    dailyUserActiveLogs(from: $from, to: $to) {
      id
      date
      logins
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      email
      name
      picture
      email_verified
      created_at
      last_login
      logins_count
    }
  }
`;

export const RESEND_EMAIL_VERIFICATION = gql`
  mutation resendEmailVerification {
    resendEmailVerification
  }
`;

export const useUsers = (input) => useQuery(USERS, input);
export const useDailyUserActiveLogs = (input) => useQuery(STATS, input);
export const useUpdateProfile = (input) => useMutation(UPDATE_PROFILE, input);
export const useResendEmailVerif = (input) =>
  useMutation(RESEND_EMAIL_VERIFICATION, input);
