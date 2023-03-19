# [Course Vision](https://course-vision.vercel.app/)

Deploy on Vercel - https://course-vision.vercel.app/

## Tech stack
<div>
<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="50px" height="50px"></a>
<a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="50px" height="50px"></a>
<a href="https://zod.dev/" title="Zod"><img src="https://github.com/colinhacks/zod/raw/master/logo.svg" alt="Zod" width="50px" height="50px"></a>
<a href="https://vitejs.dev/" title="Vite"><img src="https://github.com/get-icon/geticon/raw/master/icons/vite.svg" alt="Vite" width="50px" height="50px"></a>
</div>

## Scripts

### `npm run dev`

Runs the application in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in a browser.

### `npm run build`

Builds an application in a folder `dist`.

## More info

### Home Screen

The list of courses is displayed as cards. A maximum of 3 courses are placed in one row. The card contains the following information:
- Course cover.
- Course title.
- Hashtags.
- List of skills.
- Number of lessons available.
- Download date.

![Home Screen](./public/screen-0-home.png)

### Home Hover Screen

Hovering over the course map enlarges the image and automatically plays a video trailer without sound.

![Home Hover Screen](./public/screen-1-home-hover.png)

### Home Pagination Screen

A total of 10 courses are displayed on the main page. There is a pagination at the bottom of the page to view other available courses.

![Home Pagination Screen](./public/screen-2-home-pagination.png)

### View Content Screen

You can view all available videos on the course page. The selected video is highlighted in the list. The page contains the following information:
- Name of the lesson.
- Video.
- Rating, hashtag, date.
- Description and list of skills.
- List of all lessons.

![View Content Screen](./public/screen-3-view-content.png)

### View Controls Screen

By default, there is an option to control the video.
- Playback speed.
- Picture-in-picture mode.
- Zoom to full screen.
- Other.

![View Controls Screen](./public/screen-4-view-controls.png)

### View Locked Screen

The list also includes blocked videos. They are marked accordingly.

![View Locked Screen](./public/screen-5-view-locked.png)

### View Time Screen

Browsing time is saved when the page is refreshed.

![View Time Screen](./public/screen-6-view-time.png)

### View Back Screen

There is a Back button. It takes the user one step back.

![View Back Screen](./public/screen-7-view-back.png)

### Loader Screen

The loader is displayed when data is loaded.

![Loader Screen](./public/screen-8-loader.png)

### Not Found Screen

If an error occurs, this component is displayed with a link to the main page.

![Not Found Screen](./public/screen-9-not-found.png)
