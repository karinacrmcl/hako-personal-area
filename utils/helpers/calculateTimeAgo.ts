import moment from "moment";
import { epochs } from "../../constants/epochs";

// export function calculateTimeAgo(date: Date) {
//   return moment(date).fromNow();
// }

// export function getDuration(timeAgoInSeconds: number) {
//   for (let [name, seconds] of epochs) {
//     const interval = Math.floor(timeAgoInSeconds / seconds);
//     if (interval >= 1) {
//       return {
//         interval: interval,
//         epoch: name,
//       };
//     }
//   }
// }

function getDuration(timeAgoInSeconds: number): {
  interval: number;
  epoch: string | number;
} {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / +seconds);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name,
      };
    }
  }
  return { interval: 0, epoch: 0 };
}

export function calculateTimeAgo(date: Date) {
  const timeAgoInSeconds = Math.floor((+new Date() - +new Date(date)) / 1000);
  const { interval, epoch } = getDuration(timeAgoInSeconds);
  return `${interval}${epoch}`;
}
