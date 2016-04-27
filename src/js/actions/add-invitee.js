
export const ADD_INVITEE = "ADD_INVITEE";

export function addInvitee(friend) {
    return {
        type: ADD_INVITEE,
        data: friend
    };
}
