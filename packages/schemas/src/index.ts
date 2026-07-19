/** Common ROS-compatible message shapes used by the bundled Flora examples. */

export type Time = { sec: number; nsec: number };

export type Header = {
  stamp: Time;
  frame_id: string;
};

export type CompressedImage = {
  header: Header;
  format: string;
  data: Uint8Array;
};

export type LocationFix = {
  latitude: number;
  longitude: number;
  altitude: number;
  position_covariance?: number[];
};
