var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{a:()=>WelcomeApp});class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const o=new IpcCommand("core","webview/ready"),i=new IpcCommand("core","webview/focus/changed"),s=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const r="welcome",a=new IpcCommand(r,"configuration/update"),l=new IpcNotification(r,"didChange",!0),C=new IpcNotification(r,"org/settings/didChange");function c(e,t,o){let i,s,r,a,l;function C(e){const o=e-(s??0);return null==s||o>=t||o<0}function c(){const e=Date.now();if(C(e))d();else{l=setTimeout(c,t-(e-(s??0)))}}function d(){return l=void 0,i?function(){const t=i,o=r;return i=r=void 0,a=e.apply(o,t),a}():(i=void 0,r=void 0,a)}function p(...e){const d=Date.now(),p=C(d);return i=null!=o&&i?o(i,e):e,r=this,s=d,p&&null==l?(l=setTimeout(c,t),a):(null==l&&(l=setTimeout(c,t)),a)}return p.cancel=function(){null!=l&&clearTimeout(l),i=void 0,s=void 0,r=void 0,l=void 0},p.flush=function(){return null==l?a:(clearTimeout(l),d())},p.pending=function(){return null!=l},p}const d=",",p="=",h="{",u="(",g=")",f=/\(([\s\S]*)\)/,m=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,y=/\s?=.*$/;function v(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}const w=500;function x(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const _=x(),Z=new Map;function $(e){Z.delete(e)}function S(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=_.next();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}Error;function P(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});var A=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(A||{}),D=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(D||{});const{fromCharCode:O}=String;new TextEncoder;function F(e){const[t,o]=v(e);return 1e3*t+Math.floor(o/1e6)}function T(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}const E=Symbol("logInstanceNameFn");function B(e){return function(e,t=!1){let o,i,s,r,a,l=0,C=!1,c=!1,x=!0;null!=e&&({args:o,if:i,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:C=!0,singleLine:c=!1,timed:x=!0}=e);l>0&&(c=!0,x=!0);x&&(C=!0);const S=z.isDebugging,A=t?z.debug:z.log,D=S?"debug":"info";return(e,t,O)=>{let T,B;if("function"==typeof O.value?(T=O.value,B="value"):"function"==typeof O.get&&(T=O.get,B="get"),null==T||null==B)throw new Error("Not supported");const W=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(m,"")||t,t=t.slice(0,t.indexOf(h));let o=t.indexOf(u),i=t.indexOf(g);o=o>=0?o+1:0,i=i>0?i:t.indexOf(p),t=t.slice(o,i),t=`(${t})`;const s=f.exec(t);return null!=s?s[1].split(d).map((e=>e.trim().replace(y,""))):[]}(T):[];O[B]=function(...e){if(!S&&!z.enabled(D)||null!=i&&!i.apply(this,e))return T.apply(this,e);const d=_.next(),p=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const i=o.indexOf("_");o=-1===i?o:o.substr(i+1),null!=t?.[E]&&(o=t[E](e,o));return o}(this):void 0;let h,u=p?C?`[${d.toString(16).padStart(5)}] ${p}.${t}`:`${p}.${t}`:t;null!=a&&(u=a({id:d,instance:this,instanceName:p??"",name:t,prefix:u},...e)),C&&(h={scopeId:d,prefix:u},function(e,t){Z.set(e,t)}(d,h));const g=null!=s?s(...e):"";let f;if(!1===o||0===e.length)f="",c||A.call(z,`${u}${g}`);else{let t;f="";let i,s,r,a=-1;for(r of e){if(i=W[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(f.length>0&&(f+=", "),"string"==typeof t){f+=t;continue}s=String(t(r))}else f.length>0&&(f+=", "),s=z.toLoggable(r);f+=i?`${i}=${s}`:s}c||A.call(z,f?`${u}${g}(${f})`:`${u}${g}`)}if(c||x||null!=r){const t=x?v():void 0,o=e=>{const o=void 0!==t?` [${F(t)}ms]`:"";c?z.error(e,f?`${u}${g}(${f})`:`${u}${g}`,h?.exitDetails?`failed${h.exitDetails}${o}`:`failed${o}`):z.error(e,u,h?.exitDetails?`failed${h.exitDetails}${o}`:`failed${o}`),C&&$(d)};let i;try{i=T.apply(this,e)}catch(e){throw o(e),e}const s=e=>{let o,i,s,a;if(null!=t?(o=F(t),o>w?(i=z.warn,s=` [*${o}ms] (slow)`):(i=A,s=` [${o}ms]`)):(s="",i=A),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${z.toLoggable(e)}`);else h?.exitFailed?(a=h.exitFailed,i=z.error):a="completed";c?(0===l||o>l)&&i.call(z,f?`${u}${g}(${f}) ${a}${h?.exitDetails||""}${s}`:`${u}${g} ${a}${h?.exitDetails||""}${s}`):i.call(z,f?`${u}(${f}) ${a}${h?.exitDetails||""}${s}`:`${u} ${a}${h?.exitDetails||""}${s}`),C&&$(d)};return null!=i&&P(i)?i.then(s,o):s(i),i}return T.apply(this,e)}}}(e,!0)}const z=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=W(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=W(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function W(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const U={enabled:e=>z.enabled(e)||z.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":z.error("",t,o,...i);break;case"warn":z.warn(t,o,...i);break;case"info":z.log(t,o,...i);break;default:z.debug(t,o,...i)}}};var G;function j(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function q(e,t){return new Promise((o=>{e.addEventListener(t,(function i(s){s.target===e&&(e.removeEventListener(t,i),o())}))}))}(G||(G={})).on=function(e,t,o,i){let s=!1;if("string"==typeof e){const r=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,r,i??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,i??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,i??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,i??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:S(e??""),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??U,this._time=v(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=v(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=v(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=v(this._time),s=1e3*o+Math.floor(i/1e6),r=e?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${e?.suffix??""}`)}}const N=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};N._noop=function(){};let Q=N;const K={done:!0,value:void 0},J=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};J.Undefined=new J(void 0);let Y=J;class LinkedList{constructor(){this._first=Y.Undefined,this._last=Y.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Y.Undefined}clear(){this._first=Y.Undefined,this._last=Y.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Y(e);if(this._first===Y.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===Y.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Y.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Y.Undefined&&e.next!==Y.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Y.Undefined&&e.next===Y.Undefined?(this._first=Y.Undefined,this._last=Y.Undefined):e.next===Y.Undefined?(this._last=this._last.prev,this._last.next=Y.Undefined):e.prev===Y.Undefined&&(this._first=this._first.next,this._first.prev=Y.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Y.Undefined?K:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Y.Undefined;t=t.next)e.push(t.element);return e}}var X=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?ee(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&X(t,o,r),r};let oe;function ie(){return oe??=acquireVsCodeApi()}const ne=x();function se(){return`webview:${ne.next()}`}let re=class{constructor(e){this.appName=e,this._onReceiveMessage=new Q,this._pendingHandlers=new Map,this._api=ie(),this._disposable=G.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=Z.get(_.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??U).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(S(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=le(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=se();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=se(),i=new Promise(((t,i)=>{const s=le(e.response.method,o);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),i(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ae;function le(e,t){return`${e}|${t}`}te([B({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],re.prototype,"onMessageReceived",1),te([B({args:{0:e=>e.method,1:!1}})],re.prototype,"sendCommand",1),te([B({args:{0:e=>e.method,1:!1,2:!1}})],re.prototype,"sendRequest",1),te([B({args:{0:e=>`${e.id}, method=${e.method}`}})],re.prototype,"postMessage",1),re=te([(ae=(e,t)=>`${e.appName}(${t})`,e=>{e[E]=ae})],re);function Ce(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Ce(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Ce(Math.max(Math.min(1,t),0),3),this.l=Ce(Math.max(Math.min(1,o),0),3),this.a=Ce(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,s=e.a,r=Math.max(t,o,i),a=Math.min(t,o,i);let l=0,C=0;const c=(a+r)/2,d=r-a;if(d>0){switch(C=Math.min(c<=.5?d/(2*c):d/(2-2*c),1),r){case t:l=(o-i)/d+(o<i?6:0);break;case o:l=(i-t)/d+2;break;case i:l=(t-o)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,C,c,s)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:i,a:s}=e;let r,a,l;if(0===o)r=a=l=i;else{const e=i<.5?i*(1+o):i+o-i*o,s=2*i-e;r=HSLA._hue2rgb(s,e,t+1/3),a=HSLA._hue2rgb(s,e,t),l=HSLA._hue2rgb(s,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),s)}}class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Ce(Math.max(Math.min(1,t),0),3),this.v=Ce(Math.max(Math.min(1,o),0),3),this.a=Ce(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,s=Math.max(t,o,i),r=s-Math.min(t,o,i),a=0===s?0:r/s;let l;return l=0===r?0:s===t?((o-i)/r%6+6)%6:s===o?(i-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*l),a,s,e.a)}static toRGBA(e){const{h:t,s:o,v:i,a:s}=e,r=i*o,a=r*(1-Math.abs(t/60%2-1)),l=i-r;let[C,c,d]=[0,0,0];return t<60?(C=r,c=a):t<120?(C=a,c=r):t<180?(c=r,d=a):t<240?(c=a,d=r):t<300?(C=a,d=r):t<=360&&(C=r,d=a),C=Math.round(255*(C+l)),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),new RGBA(C,c,d,s)}}function ce(e,t){return t.getPropertyValue(e).trim()}const de=class _Color{static from(e){return e instanceof _Color?e:me(e)||_Color.red}static fromCssVariable(e,t){return me(ce(e,t))||_Color.red}static fromHex(e){return be(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Ce(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new pe(new RGBA(0,0,0,e.rgba.a));if(1===t)return new pe(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let i=20;const s=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!i--?r:a>t?s(e,r):s(r,o)},r=(o>t?s(pe.black,e):s(e,pe.white)).rgba;return new pe(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:i,a:s}=this.rgba;return new _Color(new RGBA(t,o,i,s*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,i=t.a,s=o+i*(1-o);if(s<1e-6)return _Color.transparent;const r=this.rgba.r*o/s+t.r*i*(1-o)/s,a=this.rgba.g*o/s+t.g*i*(1-o)/s,l=this.rgba.b*o/s+t.b*i*(1-o)/s;return new _Color(new RGBA(r,a,l,s))}mix(e,t){return function(e,t,o){const i=e.rgba,s=t.rgba;return new pe(new RGBA(i.r+o*(s.r-i.r),i.g+o*(s.g-i.g),i.b+o*(s.b-i.b),i.a+o*(s.a-i.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:i,a:s}=this.rgba;return new _Color(new RGBA(e.rgba.r-s*(e.rgba.r-t),e.rgba.g-s*(e.rgba.g-o),e.rgba.b-s*(e.rgba.b-i),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ge(e);return he(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const i=e.getRelativeLuminance(),s=t.getRelativeLuminance();return o=o*(s-i)/s,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const i=e.getRelativeLuminance();return o=o*(i-t.getRelativeLuminance())/i,e.darken(o)}};de.white=new de(new RGBA(255,255,255,1)),de.black=new de(new RGBA(0,0,0,1)),de.red=new de(new RGBA(255,0,0,1)),de.blue=new de(new RGBA(0,0,255,1)),de.green=new de(new RGBA(0,255,0,1)),de.cyan=new de(new RGBA(0,255,255,1)),de.lightgrey=new de(new RGBA(211,211,211,1)),de.transparent=new de(new RGBA(0,0,0,0));let pe=de;function he(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function ue(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ge(e){return`#${ue(e.rgba.r)}${ue(e.rgba.g)}${ue(e.rgba.b)}`}const fe=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function me(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===A.Hash)return be(e);const t=fe.exec(e);if(null==t)return null;const o=t[1];let i;switch(o){case"rgb":case"hsl":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new pe(new RGBA(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new pe(new HSLA(i[0],i[1],i[2],i[3]))}return pe.red}function be(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==A.Hash)return null;switch(t){case 7:{const t=16*ye(e.charCodeAt(1))+ye(e.charCodeAt(2)),o=16*ye(e.charCodeAt(3))+ye(e.charCodeAt(4)),i=16*ye(e.charCodeAt(5))+ye(e.charCodeAt(6));return new pe(new RGBA(t,o,i,1))}case 9:{const t=16*ye(e.charCodeAt(1))+ye(e.charCodeAt(2)),o=16*ye(e.charCodeAt(3))+ye(e.charCodeAt(4)),i=16*ye(e.charCodeAt(5))+ye(e.charCodeAt(6)),s=16*ye(e.charCodeAt(7))+ye(e.charCodeAt(8));return new pe(new RGBA(t,o,i,s/255))}case 4:{const t=ye(e.charCodeAt(1)),o=ye(e.charCodeAt(2)),i=ye(e.charCodeAt(3));return new pe(new RGBA(16*t+t,16*o+o,16*i+i))}case 5:{const t=ye(e.charCodeAt(1)),o=ye(e.charCodeAt(2)),i=ye(e.charCodeAt(3)),s=ye(e.charCodeAt(4));return new pe(new RGBA(16*t+t,16*o+o,16*i+i,(16*s+s)/255))}default:return null}}function ye(e){switch(e){case A.Digit0:return 0;case A.Digit1:return 1;case A.Digit2:return 2;case A.Digit3:return 3;case A.Digit4:return 4;case A.Digit5:return 5;case A.Digit6:return 6;case A.Digit7:return 7;case A.Digit8:return 8;case A.Digit9:return 9;case A.a:case A.A:return 10;case A.b:case A.B:return 11;case A.c:case A.C:return 12;case A.d:case A.D:return 13;case A.e:case A.E:return 14;case A.f:case A.F:return 15}return 0}const ve=new Q,we=ve.event;function xe(e){const t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,s=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),r=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=ce("--vscode-editor-background",o);let l=ce("--vscode-editor-foreground",o);return l||(l=ce("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],i=xe();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(i),t.push(we(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",z.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=ie(),this._hostIpc=new re(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{ve.fire(xe(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===s.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(o,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(G.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=c((e=>{this.sendCommand(i,e)}),150);this.bindDisposables.push(G.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),G.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?z.log(e,...t):z.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}const He=globalThis,Ve=He.ShadowRoot&&(void 0===He.ShadyCSS||He.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),ke=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ve&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=ke.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ke.set(t,e))}return e}toString(){return this.cssText}}const Me=e=>new n("string"==typeof e?e:e+"",void 0,Le),_e=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(o,e,Le)},Ze=Ve?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Me(t)})(e):e,{is:$e,defineProperty:Se,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Re,getOwnPropertySymbols:Ae,getPrototypeOf:De}=Object,Oe=globalThis,Fe=Oe.trustedTypes,Te=Fe?Fe.emptyScript:"",Ee=Oe.reactiveElementPolyfillSupport,Be=(e,t)=>e,Ie={toAttribute(e,t){switch(t){case Boolean:e=e?Te:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ze=(e,t)=>!$e(e,t),We={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:ze};Symbol.metadata??=Symbol("metadata"),Oe.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=We){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Se(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:s}=Pe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);s.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??We}static _$Ei(){if(this.hasOwnProperty(Be("elementProperties")))return;const e=De(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Be("properties"))){const e=this.properties,t=[...Re(e),...Ae(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Ze(e))}else void 0!==e&&t.push(Ze(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ve)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=He.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:Ie).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ie;this._$Em=i,this[i]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??ze)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[Be("elementProperties")]=new Map,b[Be("finalized")]=new Map,Ee?.({ReactiveElement:b}),(Oe.reactiveElementVersions??=[]).push("2.0.4");const Ue=globalThis,Ge=Ue.trustedTypes,je=Ge?Ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,qe="$lit$",Ne=`lit$${Math.random().toFixed(9).slice(2)}$`,Qe="?"+Ne,Ke=`<${Qe}>`,Je=document,Ye=()=>Je.createComment(""),Xe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,et=Array.isArray,tt=e=>et(e)||"function"==typeof e?.[Symbol.iterator],ot="[ \t\n\f\r]",it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,st=/>/g,rt=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,lt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,ct=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),dt=ct(1),pt=ct(2),ht=Symbol.for("lit-noChange"),ut=Symbol.for("lit-nothing"),gt=new WeakMap,ft=Je.createTreeWalker(Je,129);function mt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==je?je.createHTML(t):t}const bt=(e,t)=>{const o=e.length-1,i=[];let s,r=2===t?"<svg>":"",a=it;for(let t=0;t<o;t++){const o=e[t];let l,C,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,C=a.exec(o),null!==C);)d=a.lastIndex,a===it?"!--"===C[1]?a=nt:void 0!==C[1]?a=st:void 0!==C[2]?(Ct.test(C[2])&&(s=RegExp("</"+C[2],"g")),a=rt):void 0!==C[3]&&(a=rt):a===rt?">"===C[0]?(a=s??it,c=-1):void 0===C[1]?c=-2:(c=a.lastIndex-C[2].length,l=C[1],a=void 0===C[3]?rt:'"'===C[3]?lt:at):a===lt||a===at?a=rt:a===nt||a===st?a=it:(a=rt,s=void 0);const p=a===rt&&e[t+1].startsWith("/>")?" ":"";r+=a===it?o+Ke:c>=0?(i.push(l),o.slice(0,c)+qe+o.slice(c)+Ne+p):o+Ne+(-2===c?t:p)}return[mt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class V{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[C,c]=bt(e,t);if(this.el=V.createElement(C,o),ft.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ft.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(qe)){const t=c[r++],o=i.getAttribute(e).split(Ne),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),i.removeAttribute(e)}else e.startsWith(Ne)&&(l.push({type:6,index:s}),i.removeAttribute(e));if(Ct.test(i.tagName)){const e=i.textContent.split(Ne),t=e.length-1;if(t>0){i.textContent=Ge?Ge.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],Ye()),ft.nextNode(),l.push({type:2,index:++s});i.append(e[t],Ye())}}}else if(8===i.nodeType)if(i.data===Qe)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(Ne,e+1));)l.push({type:7,index:s}),e+=Ne.length-1}s++}}static createElement(e,t){const o=Je.createElement("template");return o.innerHTML=e,o}}function yt(e,t,o=e,i){if(t===ht)return t;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=Xe(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(t=yt(e,s._$AS(e,t.values),s,i)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??Je).importNode(t,!0);ft.currentNode=i;let s=ft.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new L(s,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(s=ft.nextNode(),r++)}return ft.currentNode=Je,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=ut,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yt(this,e,t),Xe(e)?e===ut||null==e||""===e?(this._$AH!==ut&&this._$AR(),this._$AH=ut):e!==this._$AH&&e!==ht&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):tt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ut&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Je.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(mt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new lit_html_S(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=gt.get(e.strings);return void 0===t&&gt.set(e.strings,t=new V(e)),t}k(e){et(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new M(this.S(Ye()),this.S(Ye()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,s){this.type=1,this._$AH=ut,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ut}_$AI(e,t=this,o,i){const s=this.strings;let r=!1;if(void 0===s)e=yt(this,e,t,0),r=!Xe(e)||e!==this._$AH&&e!==ht,r&&(this._$AH=e);else{const i=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=yt(this,i[o+a],t,a),l===ht&&(l=this._$AH[a]),r||=!Xe(l)||l!==this._$AH[a],l===ut?e=ut:e!==ut&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===ut?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ut?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ut)}}class I extends R{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){if((e=yt(this,e,t,0)??ut)===ht)return;const o=this._$AH,i=e===ut&&o!==ut||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==ut&&(o===ut||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}}const vt=Ue.litHtmlPolyfillSupport;vt?.(V,M),(Ue.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=o?.renderBefore??null;i._$litPart$=s=new M(t.insertBefore(Ye(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ht}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const wt=globalThis.litElementPolyfillSupport;wt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const xt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Ht={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:ze},Vt=(e=Ht,t,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];t.call(this,o),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};function Lt(e){return(t,o)=>"object"==typeof o?Vt(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const kt=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function Mt(e,t){return(o,i,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return kt(o,i,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return kt(o,i,{get(){return r(this)}})}}var _t=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,$t=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Zt(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&_t(t,o,r),r};const St=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let Pt=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Pt.styles=_e`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${Me(Object.entries(St).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,$t([Lt({reflect:!0})],Pt.prototype,"icon",2),$t([Lt({reflect:!0})],Pt.prototype,"modifier",2),$t([Lt({type:Number})],Pt.prototype,"size",2),$t([Lt({reflect:!0})],Pt.prototype,"flip",2),$t([Lt({reflect:!0})],Pt.prototype,"rotate",2),Pt=$t([xt("code-icon")],Pt);_e`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const Rt=_e`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,At=_e`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Dt=_e`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Ot=_e`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Rt}
	}
	a:hover {
		text-decoration: underline;
	}
`;_e`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var Ft=Object.defineProperty,Tt=Object.defineProperties,Et=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,It=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,Ut=(e,t,o)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Gt=(e,t)=>{for(var o in t||(t={}))zt.call(t,o)&&Ut(e,o,t[o]);if(It)for(var o of It(t))Wt.call(t,o)&&Ut(e,o,t[o]);return e},jt=(e,t)=>Tt(e,Bt(t)),qt=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Et(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Ft(t,o,r),r},Nt=new Map,Qt=new WeakMap;function Kt(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function Jt(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Yt(e,t){Nt.set(e,Kt(t))}function Xt(e,t,o){const i=Qt.get(e);if(null==i?void 0:i[t])return Jt(i[t],o.dir);const s=Nt.get(t);return s?Jt(s,o.dir):{keyframes:[],options:{duration:0}}}var eo=_e`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,to=_e`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,oo=_e`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,io=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i)return void customElements.define(e,class extends t{},o);let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version)}};io.version="2.15.1",io.dependencies={},qt([Lt()],io.prototype,"dir",2),qt([Lt()],io.prototype,"lang",2);const no=Math.min,so=Math.max,ro=Math.round,ao=Math.floor,lo=e=>({x:e,y:e}),Co={left:"right",right:"left",bottom:"top",top:"bottom"},co={start:"end",end:"start"};function po(e,t,o){return so(e,no(t,o))}function ho(e,t){return"function"==typeof e?e(t):e}function uo(e){return e.split("-")[0]}function go(e){return e.split("-")[1]}function fo(e){return"x"===e?"y":"x"}function mo(e){return"y"===e?"height":"width"}function bo(e){return["top","bottom"].includes(uo(e))?"y":"x"}function yo(e){return fo(bo(e))}function vo(e){return e.replace(/start|end/g,(e=>co[e]))}function wo(e){return e.replace(/left|right|bottom|top/g,(e=>Co[e]))}function xo(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ho(e){const{x:t,y:o,width:i,height:s}=e;return{width:i,height:s,top:o,left:t,right:t+i,bottom:o+s,x:t,y:o}}function Vo(e,t,o){let{reference:i,floating:s}=e;const r=bo(t),a=yo(t),l=mo(a),C=uo(t),c="y"===r,d=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,h=i[l]/2-s[l]/2;let u;switch(C){case"top":u={x:d,y:i.y-s.height};break;case"bottom":u={x:d,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:p};break;case"left":u={x:i.x-s.width,y:p};break;default:u={x:i.x,y:i.y}}switch(go(t)){case"start":u[a]-=h*(o&&c?-1:1);break;case"end":u[a]+=h*(o&&c?-1:1)}return u}async function Lo(e,t){var o;void 0===t&&(t={});const{x:i,y:s,platform:r,rects:a,elements:l,strategy:C}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:h=!1,padding:u=0}=ho(t,e),g=xo(u),f=l[h?"floating"===p?"reference":"floating":p],m=Ho(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(f)))||o?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:C})),y="floating"===p?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},x=Ho(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:C}):y);return{top:(m.top-x.top+g.top)/w.y,bottom:(x.bottom-m.bottom+g.bottom)/w.y,left:(m.left-x.left+g.left)/w.x,right:(x.right-m.right+g.right)/w.x}}function ko(e){return Zo(e)?(e.nodeName||"").toLowerCase():"#document"}function Mo(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function _o(e){var t;return null==(t=(Zo(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Zo(e){return e instanceof Node||e instanceof Mo(e).Node}function $o(e){return e instanceof Element||e instanceof Mo(e).Element}function So(e){return e instanceof HTMLElement||e instanceof Mo(e).HTMLElement}function Po(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Mo(e).ShadowRoot)}function Ro(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=Eo(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function Ao(e){return["table","td","th"].includes(ko(e))}function Do(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Oo(e){const t=Fo(),o=$o(e)?Eo(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Fo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function To(e){return["html","body","#document"].includes(ko(e))}function Eo(e){return Mo(e).getComputedStyle(e)}function Bo(e){return $o(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Io(e){if("html"===ko(e))return e;const t=e.assignedSlot||e.parentNode||Po(e)&&e.host||_o(e);return Po(t)?t.host:t}function zo(e){const t=Io(e);return To(t)?e.ownerDocument?e.ownerDocument.body:e.body:So(t)&&Ro(t)?t:zo(t)}function Wo(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const s=zo(e),r=s===(null==(i=e.ownerDocument)?void 0:i.body),a=Mo(s);return r?t.concat(a,a.visualViewport||[],Ro(s)?s:[],a.frameElement&&o?Wo(a.frameElement):[]):t.concat(s,Wo(s,[],o))}function Uo(e){const t=Eo(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=So(e),r=s?e.offsetWidth:o,a=s?e.offsetHeight:i,l=ro(o)!==r||ro(i)!==a;return l&&(o=r,i=a),{width:o,height:i,$:l}}function Go(e){return $o(e)?e:e.contextElement}function jo(e){const t=Go(e);if(!So(t))return lo(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:r}=Uo(t);let a=(r?ro(o.width):o.width)/i,l=(r?ro(o.height):o.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const qo=lo(0);function No(e){const t=Mo(e);return Fo()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:qo}function Qo(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const s=e.getBoundingClientRect(),r=Go(e);let a=lo(1);t&&(i?$o(i)&&(a=jo(i)):a=jo(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Mo(e))&&t}(r,o,i)?No(r):lo(0);let C=(s.left+l.x)/a.x,c=(s.top+l.y)/a.y,d=s.width/a.x,p=s.height/a.y;if(r){const e=Mo(r),t=i&&$o(i)?Mo(i):i;let o=e,s=o.frameElement;for(;s&&i&&t!==o;){const e=jo(s),t=s.getBoundingClientRect(),i=Eo(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;C*=e.x,c*=e.y,d*=e.x,p*=e.y,C+=r,c+=a,o=Mo(s),s=o.frameElement}}return Ho({width:d,height:p,x:C,y:c})}function Ko(e){return Qo(_o(e)).left+Bo(e).scrollLeft}function Jo(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=Mo(e),i=_o(e),s=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,C=0;if(s){r=s.width,a=s.height;const e=Fo();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,C=s.offsetTop)}return{width:r,height:a,x:l,y:C}}(e,o);else if("document"===t)i=function(e){const t=_o(e),o=Bo(e),i=e.ownerDocument.body,s=so(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=so(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+Ko(e);const l=-o.scrollTop;return"rtl"===Eo(i).direction&&(a+=so(t.clientWidth,i.clientWidth)-s),{width:s,height:r,x:a,y:l}}(_o(e));else if($o(t))i=function(e,t){const o=Qo(e,!0,"fixed"===t),i=o.top+e.clientTop,s=o.left+e.clientLeft,r=So(e)?jo(e):lo(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:s*r.x,y:i*r.y}}(t,o);else{const o=No(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Ho(i)}function Yo(e,t){const o=Io(e);return!(o===t||!$o(o)||To(o))&&("fixed"===Eo(o).position||Yo(o,t))}function Xo(e,t,o){const i=So(t),s=_o(t),r="fixed"===o,a=Qo(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const C=lo(0);if(i||!i&&!r)if(("body"!==ko(t)||Ro(s))&&(l=Bo(t)),i){const e=Qo(t,!0,r,t);C.x=e.x+t.clientLeft,C.y=e.y+t.clientTop}else s&&(C.x=Ko(s));return{x:a.left+l.scrollLeft-C.x,y:a.top+l.scrollTop-C.y,width:a.width,height:a.height}}function ei(e){return"static"===Eo(e).position}function ti(e,t){return So(e)&&"fixed"!==Eo(e).position?t?t(e):e.offsetParent:null}function oi(e,t){const o=Mo(e);if(Do(e))return o;if(!So(e)){let t=Io(e);for(;t&&!To(t);){if($o(t)&&!ei(t))return t;t=Io(t)}return o}let i=ti(e,t);for(;i&&Ao(i)&&ei(i);)i=ti(i,t);return i&&To(i)&&ei(i)&&!Oo(i)?o:i||function(e){let t=Io(e);for(;So(t)&&!To(t);){if(Oo(t))return t;if(Do(t))return null;t=Io(t)}return null}(e)||o}const ii={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:s}=e;const r="fixed"===s,a=_o(i),l=!!t&&Do(t.floating);if(i===a||l&&r)return o;let C={scrollLeft:0,scrollTop:0},c=lo(1);const d=lo(0),p=So(i);if((p||!p&&!r)&&(("body"!==ko(i)||Ro(a))&&(C=Bo(i)),So(i))){const e=Qo(i);c=jo(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-C.scrollLeft*c.x+d.x,y:o.y*c.y-C.scrollTop*c.y+d.y}},getDocumentElement:_o,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const r=[..."clippingAncestors"===o?Do(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let i=Wo(e,[],!1).filter((e=>$o(e)&&"body"!==ko(e))),s=null;const r="fixed"===Eo(e).position;let a=r?Io(e):e;for(;$o(a)&&!To(a);){const t=Eo(a),o=Oo(a);o||"fixed"!==t.position||(s=null),(r?!o&&!s:!o&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||Ro(a)&&!o&&Yo(e,a))?i=i.filter((e=>e!==a)):s=t,a=Io(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=r[0],l=r.reduce(((e,o)=>{const i=Jo(t,o,s);return e.top=so(i.top,e.top),e.right=no(i.right,e.right),e.bottom=no(i.bottom,e.bottom),e.left=so(i.left,e.left),e}),Jo(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:oi,getElementRects:async function(e){const t=this.getOffsetParent||oi,o=this.getDimensions,i=await o(e.floating);return{reference:Xo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Uo(e);return{width:t,height:o}},getScale:jo,isElement:$o,isRTL:function(e){return"rtl"===Eo(e).direction}};function ni(e,t,o,i){void 0===i&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:C=!1}=i,c=Go(e),d=s||r?[...c?Wo(c):[],...Wo(t)]:[];d.forEach((e=>{s&&e.addEventListener("scroll",o,{passive:!0}),r&&e.addEventListener("resize",o)}));const p=c&&l?function(e,t){let o,i=null;const s=_o(e);function r(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return function a(l,C){void 0===l&&(l=!1),void 0===C&&(C=1),r();const{left:c,top:d,width:p,height:h}=e.getBoundingClientRect();if(l||t(),!p||!h)return;const u={rootMargin:-ao(d)+"px "+-ao(s.clientWidth-(c+p))+"px "+-ao(s.clientHeight-(d+h))+"px "+-ao(c)+"px",threshold:so(0,no(1,C))||1};let g=!0;function f(e){const t=e[0].intersectionRatio;if(t!==C){if(!g)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}g=!1}try{i=new IntersectionObserver(f,{...u,root:s.ownerDocument})}catch(e){i=new IntersectionObserver(f,u)}i.observe(e)}(!0),r}(c,o):null;let h,u=-1,g=null;a&&(g=new ResizeObserver((e=>{let[i]=e;i&&i.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame((()=>{var e;null==(e=g)||e.observe(t)}))),o()})),c&&!C&&g.observe(c),g.observe(t));let f=C?Qo(e):null;return C&&function t(){const i=Qo(e);!f||i.x===f.x&&i.y===f.y&&i.width===f.width&&i.height===f.height||o();f=i,h=requestAnimationFrame(t)}(),o(),()=>{var e;d.forEach((e=>{s&&e.removeEventListener("scroll",o),r&&e.removeEventListener("resize",o)})),null==p||p(),null==(e=g)||e.disconnect(),g=null,C&&cancelAnimationFrame(h)}}const si=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:r,placement:a,middlewareData:l}=t,C=await async function(e,t){const{placement:o,platform:i,elements:s}=e,r=await(null==i.isRTL?void 0:i.isRTL(s.floating)),a=uo(o),l=go(o),C="y"===bo(o),c=["left","top"].includes(a)?-1:1,d=r&&C?-1:1,p=ho(t,e);let{mainAxis:h,crossAxis:u,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof g&&(u="end"===l?-1*g:g),C?{x:u*d,y:h*c}:{x:h*c,y:u*d}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:s+C.x,y:r+C.y,data:{...C,placement:a}}}}},ri=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...C}=ho(e,t),c={x:o,y:i},d=await Lo(t,C),p=bo(uo(s)),h=fo(p);let u=c[h],g=c[p];if(r){const e="y"===h?"bottom":"right";u=po(u+d["y"===h?"top":"left"],u,u-d[e])}if(a){const e="y"===p?"bottom":"right";g=po(g+d["y"===p?"top":"left"],g,g-d[e])}const f=l.fn({...t,[h]:u,[p]:g});return{...f,data:{x:f.x-o,y:f.y-i}}}}},ai=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:C,elements:c}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:f=!0,...m}=ho(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const y=uo(s),v=bo(l),w=uo(l)===l,x=await(null==C.isRTL?void 0:C.isRTL(c.floating)),_=h||(w||!f?[wo(l)]:function(e){const t=wo(e);return[vo(e),t,vo(t)]}(l)),Z="none"!==g;!h&&Z&&_.push(...function(e,t,o,i){const s=go(e);let r=function(e,t,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?r:a;default:return[]}}(uo(e),"start"===o,i);return s&&(r=r.map((e=>e+"-"+s)),t&&(r=r.concat(r.map(vo)))),r}(l,f,g,x));const $=[l,..._],S=await Lo(t,m),P=[];let A=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&P.push(S[y]),p){const e=function(e,t,o){void 0===o&&(o=!1);const i=go(e),s=yo(e),r=mo(s);let a="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=wo(a)),[a,wo(a)]}(s,a,x);P.push(S[e[0]],S[e[1]])}if(A=[...A,{placement:s,overflows:P}],!P.every((e=>e<=0))){var D,O;const e=((null==(D=r.flip)?void 0:D.index)||0)+1,t=$[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let o=null==(O=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!o)switch(u){case"bestFit":{var F;const e=null==(F=A.filter((e=>{if(Z){const t=bo(e.placement);return t===v||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:F[0];e&&(o=e);break}case"initialPlacement":o=l}if(s!==o)return{reset:{placement:o}}}return{}}}},li=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:s,elements:r}=t,{apply:a=()=>{},...l}=ho(e,t),C=await Lo(t,l),c=uo(o),d=go(o),p="y"===bo(o),{width:h,height:u}=i.floating;let g,f;"top"===c||"bottom"===c?(g=c,f=d===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(f=c,g="end"===d?"top":"bottom");const m=u-C.top-C.bottom,y=h-C.left-C.right,v=no(u-C[g],m),w=no(h-C[f],y),x=!t.middlewareData.shift;let _=v,Z=w;if(p?Z=d||x?no(w,y):y:_=d||x?no(v,m):m,x&&!d){const e=so(C.left,0),t=so(C.right,0),o=so(C.top,0),i=so(C.bottom,0);p?Z=h-2*(0!==e||0!==t?e+t:so(C.left,C.right)):_=u-2*(0!==o||0!==i?o+i:so(C.top,C.bottom))}await a({...t,availableWidth:Z,availableHeight:_});const $=await s.getDimensions(r.floating);return h!==$.width||u!==$.height?{reset:{rects:!0}}:{}}}},Ci=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:r,platform:a,elements:l,middlewareData:C}=t,{element:c,padding:d=0}=ho(e,t)||{};if(null==c)return{};const p=xo(d),h={x:o,y:i},u=yo(s),g=mo(u),f=await a.getDimensions(c),m="y"===u,y=m?"top":"left",v=m?"bottom":"right",w=m?"clientHeight":"clientWidth",x=r.reference[g]+r.reference[u]-h[u]-r.floating[g],_=h[u]-r.reference[u],Z=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c));let $=Z?Z[w]:0;$&&await(null==a.isElement?void 0:a.isElement(Z))||($=l.floating[w]||r.floating[g]);const S=x/2-_/2,P=$/2-f[g]/2-1,A=no(p[y],P),D=no(p[v],P),O=A,F=$-f[g]-D,T=$/2-f[g]/2+S,E=po(O,T,F),B=!C.arrow&&null!=go(s)&&T!==E&&r.reference[g]/2-(T<O?A:D)-f[g]/2<0,z=B?T<O?T-O:T-F:0;return{[u]:h[u]+z,data:{[u]:E,centerOffset:T-E-z,...B&&{alignmentOffset:z}},reset:B}}}),ci=(e,t,o)=>{const i=new Map,s={platform:ii,...o},r={...s.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),C=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:d,y:p}=Vo(c,i,C),h=i,u={},g=0;for(let o=0;o<l.length;o++){const{name:r,fn:f}=l[o],{x:m,y,data:v,reset:w}=await f({x:d,y:p,initialPlacement:i,placement:h,strategy:s,middlewareData:u,rects:c,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,p=null!=y?y:p,u={...u,[r]:{...u[r],...v}},w&&g<=50&&(g++,"object"==typeof w&&(w.placement&&(h=w.placement),w.rects&&(c=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):w.rects),({x:d,y:p}=Vo(c,h,C))),o=-1)}return{x:d,y:p,placement:h,strategy:s,middlewareData:u}})(e,t,{...s,platform:r})},di=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const pi=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==di||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ht}});function hi(e){return gi(e)}function ui(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function gi(e){for(let t=e;t;t=ui(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=ui(e);t;t=ui(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var fi=class extends io{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,a=0,l=0,C=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,i=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,C=t.right,c=t.top):(o=t.left,i=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,C=e.right,c=e.top):e.left<t.left?(o=e.right,i=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,C=t.left,c=t.bottom):(o=t.right,i=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,C=e.left,c=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${C}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ni(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[si({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(li({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(ai({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ri({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(li({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Ci({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>ii.getOffsetParent(e,hi):ii.getOffsetParent;ci(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:jt(Gt({},ii),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:i})=>{const s="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let i="",a="",l="",C="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?o:"",C=s?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":o,C=s?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(C="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(C="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:C,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return dt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${pi({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${pi({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?dt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function mi(e,t){return new Promise((o=>{e.addEventListener(t,(function i(s){s.target===e&&(e.removeEventListener(t,i),o())}))}))}function bi(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,jt(Gt({},o),{duration:vi()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})}))}function yi(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function vi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function wi(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}fi.styles=[oo,to],qt([Mt(".popup")],fi.prototype,"popup",2),qt([Mt(".popup__arrow")],fi.prototype,"arrowEl",2),qt([Lt()],fi.prototype,"anchor",2),qt([Lt({type:Boolean,reflect:!0})],fi.prototype,"active",2),qt([Lt({reflect:!0})],fi.prototype,"placement",2),qt([Lt({reflect:!0})],fi.prototype,"strategy",2),qt([Lt({type:Number})],fi.prototype,"distance",2),qt([Lt({type:Number})],fi.prototype,"skidding",2),qt([Lt({type:Boolean})],fi.prototype,"arrow",2),qt([Lt({attribute:"arrow-placement"})],fi.prototype,"arrowPlacement",2),qt([Lt({attribute:"arrow-padding",type:Number})],fi.prototype,"arrowPadding",2),qt([Lt({type:Boolean})],fi.prototype,"flip",2),qt([Lt({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],fi.prototype,"flipFallbackPlacements",2),qt([Lt({attribute:"flip-fallback-strategy"})],fi.prototype,"flipFallbackStrategy",2),qt([Lt({type:Object})],fi.prototype,"flipBoundary",2),qt([Lt({attribute:"flip-padding",type:Number})],fi.prototype,"flipPadding",2),qt([Lt({type:Boolean})],fi.prototype,"shift",2),qt([Lt({type:Object})],fi.prototype,"shiftBoundary",2),qt([Lt({attribute:"shift-padding",type:Number})],fi.prototype,"shiftPadding",2),qt([Lt({attribute:"auto-size"})],fi.prototype,"autoSize",2),qt([Lt()],fi.prototype,"sync",2),qt([Lt({type:Object})],fi.prototype,"autoSizeBoundary",2),qt([Lt({attribute:"auto-size-padding",type:Number})],fi.prototype,"autoSizePadding",2),qt([Lt({attribute:"hover-bridge",type:Boolean})],fi.prototype,"hoverBridge",2);const xi=new Set,Hi=new Map;let Vi,Li="ltr",ki="en";const Mi="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Mi){const e=new MutationObserver(Zi);Li=document.documentElement.dir||"ltr",ki=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _i(...e){e.map((e=>{const t=e.$code.toLowerCase();Hi.has(t)?Hi.set(t,Object.assign(Object.assign({},Hi.get(t)),e)):Hi.set(t,e),Vi||(Vi=e)})),Zi()}function Zi(){Mi&&(Li=document.documentElement.dir||"ltr",ki=document.documentElement.lang||navigator.language),[...xi.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){xi.add(this.host)}hostDisconnected(){xi.delete(this.host)}dir(){return`${this.host.dir||Li}`.toLowerCase()}lang(){return`${this.host.lang||ki}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:s,region:r,primary:Hi.get(`${s}-${r}`),secondary:Hi.get(s)}}exists(e,t){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||s&&s[e]||t.includeFallback&&Vi&&Vi[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(i&&i[e])s=i[e];else{if(!Vi||!Vi[e])return String(e);s=Vi[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var $i={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};_i($i);var Si=$i,Pi=class extends LocalizeController{};function Ri(e,t){const o=Gt({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,r))}})),s.call(this,e)}}}_i(Si);var Ai=class extends io{constructor(){super(),this.localize=new Pi(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=yi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=yi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await wi(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=Xt(this,"tooltip.show",{dir:this.localize.dir()});await bi(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await wi(this.body);const{keyframes:e,options:o}=Xt(this,"tooltip.hide",{dir:this.localize.dir()});await bi(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,mi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mi(this,"sl-after-hide")}render(){return dt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${pi({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ai.styles=[oo,eo],Ai.dependencies={"sl-popup":fi},qt([Mt("slot:not([name])")],Ai.prototype,"defaultSlot",2),qt([Mt(".tooltip__body")],Ai.prototype,"body",2),qt([Mt("sl-popup")],Ai.prototype,"popup",2),qt([Lt()],Ai.prototype,"content",2),qt([Lt()],Ai.prototype,"placement",2),qt([Lt({type:Boolean,reflect:!0})],Ai.prototype,"disabled",2),qt([Lt({type:Number})],Ai.prototype,"distance",2),qt([Lt({type:Boolean,reflect:!0})],Ai.prototype,"open",2),qt([Lt({type:Number})],Ai.prototype,"skidding",2),qt([Lt()],Ai.prototype,"trigger",2),qt([Lt({type:Boolean})],Ai.prototype,"hoist",2),qt([Ri("open",{waitUntilFirstUpdate:!0})],Ai.prototype,"handleOpenChange",1),qt([Ri(["content","distance","hoist","placement","skidding"])],Ai.prototype,"handleOptionsChange",1),qt([Ri("disabled")],Ai.prototype,"handleDisabledChange",1),Yt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Yt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Ai.define("sl-tooltip");var Di=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Fi=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Oi(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Di(t,o,r),r};Yt("tooltip.show",null),Yt("tooltip.hide",null);let Ti=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return dt`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ut}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Ti.styles=_e`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,Fi([Lt()],Ti.prototype,"content",2),Fi([Lt({reflect:!0})],Ti.prototype,"placement",2),Fi([Lt({type:Boolean})],Ti.prototype,"disabled",2),Fi([Lt({type:Number})],Ti.prototype,"distance",2),Fi([Lt({type:Boolean})],Ti.prototype,"hoist",2),Ti=Fi([xt("gl-tooltip")],Ti);var Ei=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Ii=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Bi(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Ei(t,o,r),r};let zi=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?dt`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?dt`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?dt`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:dt`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};zi.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},zi.styles=[Dt,_e`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${At}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],Ii([Mt(".control")],zi.prototype,"control",2),Ii([Lt({reflect:!0})],zi.prototype,"appearance",2),Ii([Lt({type:Boolean,reflect:!0})],zi.prototype,"disabled",2),Ii([Lt({reflect:!0})],zi.prototype,"density",2),Ii([Lt({type:Boolean,reflect:!0})],zi.prototype,"full",2),Ii([Lt()],zi.prototype,"href",2),Ii([Lt({reflect:!0})],zi.prototype,"role",1),Ii([Lt()],zi.prototype,"tooltip",2),zi=Ii([xt("gl-button")],zi);var Wi=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(Wi||{}),Ui=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Ui||{});function Gi(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function ji(e,t){return qi(e.plan.effective.expiresOn,t)}function qi(e,t){return null!=e?function(e,t,o,i){const s=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=i??Math.floor;switch(o){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(e),t,Math.round):void 0}fi.define("sl-popup");const Ni=new WeakMap;function Qi(e,t){return function(o,i,s){let r=Ni.get(o.constructor);null==r&&Ni.set(o.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,o){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){const t=Ni.get(this.constructor);if(null!=t)for(const{keys:o,method:i,afterFirstUpdate:s}of t){if(s&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&i.call(this,t)}super.update(e)}}var Ki=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Yi=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Ji(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Ki(t,o,r),r};let Xi=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=j(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=j(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,q(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,q(this,"gl-popover-after-hide")}render(){return dt`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			arrow
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};Xi.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Xi.styles=_e`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,Yi([Mt("#popover")],Xi.prototype,"body",2),Yi([Mt("sl-popup")],Xi.prototype,"popup",2),Yi([Lt({reflect:!0})],Xi.prototype,"placement",2),Yi([Lt({type:Object})],Xi.prototype,"anchor",2),Yi([Lt({reflect:!0,type:Boolean})],Xi.prototype,"disabled",2),Yi([Lt({type:Number})],Xi.prototype,"distance",2),Yi([Lt({reflect:!0,type:Boolean})],Xi.prototype,"open",2),Yi([Lt({type:Number})],Xi.prototype,"skidding",2),Yi([Lt()],Xi.prototype,"trigger",2),Yi([Lt({type:Boolean})],Xi.prototype,"hoist",2),Yi([Qi("open",{afterFirstUpdate:!0})],Xi.prototype,"handleOpenChange",1),Yi([Qi(["distance","hoist","placement","skidding"])],Xi.prototype,"handleOptionsChange",1),Yi([Qi("disabled")],Xi.prototype,"handleDisabledChange",1),Xi=Yi([xt("gl-popover")],Xi);var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,on=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?tn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&en(t,o,r),r};let nn=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:ji(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return dt`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===Ui.VerificationRequired)return dt`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(o=this.subscription,"free"!==(i=o.plan.actual.id)&&"free+"!==i||this.cloud&&null!=this.subscription.account)return dt`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return dt`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t,o,i;return this.cloud?dt`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=dt`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===Ui.Paid?dt`<div class="popup-header">${e}</div>`:this.cloud?this.preview?dt`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:dt`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?dt`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:dt`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return ut;let e;switch(this.state){case Ui.Paid:e=dt`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${sn(D.ShowAccountView,void 0)}"
							>${Gi(this.subscription?.plan.actual.id??Wi.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case Ui.VerificationRequired:e=dt`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${sn(D.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${sn(D.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case Ui.FreePlusInTrial:{const t=this.daysRemaining;e=dt`<p>
						You have
						<strong>${t<1?"<1 day":T("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case Ui.FreePlusTrialExpired:e=dt`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(dt`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case Ui.FreePlusTrialReactivationEligible:e=dt`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${sn(D.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===Ui.FreeInPreviewTrial){const t=this.daysRemaining;e=dt`<p>
							You have
							<strong>${t<1?"<1 day":T("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=dt`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return dt`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return dt`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${sn(D.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${sn(D.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return dt`<div class="actions">
			${e??ut}
			<gl-button
				appearance="primary"
				density="tight"
				href="${sn(D.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			<p class="special">Special: <b>1st seat of Pro is now 50%+ off.</b><br /></p>
		</div>`}};function sn(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}nn.styles=[Dt,Ot,_e`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${Me(Rt)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.6rem;
			}

			.popup-content .actions .special {
				font-size: smaller;
				margin-top: 0.8rem;
				opacity: 0.6;
				text-align: center;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],on([Lt({type:Boolean})],nn.prototype,"cloud",2),on([Lt({reflect:!0})],nn.prototype,"placement",2),on([Lt({type:Boolean})],nn.prototype,"preview",2),on([Lt({type:Object})],nn.prototype,"source",2),on([Lt({attribute:!1})],nn.prototype,"subscription",2),nn=on([xt("gl-feature-badge")],nn);var rn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,ln=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?an(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&rn(t,o,r),r};let Cn=class extends lit_element_s{render(){const e=dt`
			<div class="header">
				<slot name="header"></slot>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		`;return null!=this.href?dt`<a href=${this.href}>${e}</a>`:e}};Cn.styles=[Dt,_e`
			:host {
				display: block;
				padding: 1.6rem;
				background-color: var(--gk-card-background);
				border-radius: var(--gk-card-radius);
			}

			:host > a {
				color: inherit;
				text-decoration: none;
			}

			:host([tabindex]:not([tabindex='-1'])) {
				cursor: pointer;
			}

			:host([tabindex]:not([tabindex='-1']):hover) {
				background-color: var(--gk-card-hover-background);
			}

			:host([tabindex]:not([tabindex='-1']):focus) {
				${Rt}
			}

			.header {
			}

			slot[name='header']::slotted(*) {
				margin-top: 0 !important;
				margin-bottom: 0 !important;
			}

			.content {
				margin-top: 0.4rem;
			}

			/*
			slot:not([name])::slotted(:first-child) {
				margin-top: 0;
			}
			slot:not([name])::slotted(:last-child) {
				margin-bottom: 0;
			} */
		`],ln([Lt()],Cn.prototype,"href",2),Cn=ln([xt("gk-card")],Cn);var cn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor;let pn=class extends lit_element_s{render(){return dt`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				style="mix-blend-mode:soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				style="mix-blend-mode:soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};pn.styles=[_e`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}
		`],pn=((e,t,o,i)=>{for(var s,r=i>1?void 0:i?dn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&cn(t,o,r),r})([xt("gitlens-logo")],pn);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,gn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?un(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&hn(t,o,r),r};let fn=class extends lit_element_s{render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="44" viewBox="0 0 600 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g class="line">
					<rect class="line-current" x="0" y="21" width="calc(100% - 1px)" height="21"></rect>
					<text y="14"><tspan x="7" class="line-number">12</tspan></text>
					<text y="36"><tspan x="7" class="line-number-active">13</tspan></text>
				</g>
				<g class="annotations-left">
					<rect class="gutter" x="28" y="0" width="242" height="100%"></rect>
					<g class="line">
						<g class="gutter-avatar">
							<circle cx="42" cy="9" r="7"></circle>
							<text x="42" y="11.5" text-anchor="middle">EA</text>
						</g>
						<text y="14"><tspan x="58" class="gutter-text">Hello GitLens</tspan><tspan x="274" dx="-12" text-anchor="end" class="gutter-text">6 yrs ago</tspan></text>
						<g class="gutter-avatar">
							<circle cx="42" cy="31" r="7"></circle>
							<text x="42" y="33.5" text-anchor="middle">EA</text>
						</g>
						<text y="36"><tspan x="58" class="gutter-text">Supercharged</tspan><tspan x="274" dx="-12" text-anchor="end" class="gutter-text">6 yrs ago</tspan></text>
					</g>
					<line class="heatmap" x1="270" y1="0" x2="270" y2="100%" />
				</g>
				<g class="annotations-right">
					<g class="line">
						<text y="14"><tspan x="278" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan></text>
						<text y="36"><tspan x="278" dx="24" class="function-return">return</tspan><tspan dx="6" class="function-name">supercharged</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan><tspan class="cursor">|</tspan></text>
					</g>
				</g>
			</svg>
		`}};fn.styles=_e`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.line text {
			font-family: var(--vscode-editor-font-family);
			font-size: var(--vscode-editor-font-size);
			font-weight: var(--vscode-editor-font-weight);
		}

		.cursor {
			fill: var(--vscode-editorCursor-foreground);
		}

		.splitter {
			stroke: var(--vscode-editorGroup-border);
		}

		.punctuation {
			fill: var(--vscode-editor-foreground);
		}

		.function-declaration {
			fill: var(--vscode-symbolIcon-functionForeground);
		}

		.function-name {
			fill: var(--vscode-symbolIcon-colorForeground);
		}

		.function-argument {
			fill: var(--vscode-symbolIcon-variableForeground);
		}

		.function-argument-type {
			fill: var(--vscode-symbolIcon-typeParameterForeground);
		}

		.function-return {
			fill: var(--vscode-debugTokenExpression-name);
		}

		.line-current {
			fill: var(--vscode-editor-lineHighlightBackground);
			stroke: var(--vscode-editor-lineHighlightBorder);
			stroke-width: 0.1rem;
			fill-opacity: 0.8;
		}

		.line-number {
			fill: var(--vscode-editorLineNumber-foreground);
		}

		.line-number-active {
			fill: var(--vscode-editorLineNumber-activeForeground);
		}

		.gutter {
			fill: var(--vscode-gitlens-gutterBackgroundColor);
		}

		.gutter-avatar circle {
			fill: var(--vscode-editorInfo-foreground);
		}
		.gutter-avatar text {
			fill: var(--vscode-gitlens-gutterForegroundColor);
			font-size: 0.75rem;
		}

		.gutter-text {
			fill: var(--vscode-gitlens-gutterForegroundColor);
		}

		.heatmap {
			stroke: #7162db;
		}

		.annotations-left {
			transition: opacity 150ms ease-in-out;
		}

		.annotations-right {
			transition: transform 150ms ease-in-out;
		}

		:host(:not([toggled])) .annotations-left {
			opacity: 0;
		}
		:host(:not([toggled])) .annotations-right {
			transform: translateX(-242px);
		}
	`,gn([Lt({type:Boolean,reflect:!0})],fn.prototype,"toggled",2),fn=gn([xt("gk-annotations-svg")],fn);var mn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,yn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?bn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&mn(t,o,r),r};let vn=class extends lit_element_s{onMouseOver(){this.hovered=!0,this.hovering=this.inline}onMouseOut(){this.hovered=!0,this.hovering=!1}render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg class="hover" width="600" height="177" viewBox="30 0 80 177" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="370" height="177" rx="3"></rect>
				<text x="9" y="41" text-anchor="start"><tspan class="codicon" font-size="32">&#xeb99;</tspan></text>
				<text>
					<tspan class="hover__author hover__link" x="52" y="30">You</tspan><tspan>, 6 years ago via PR&nbsp;</tspan><tspan class="hover__author hover__link">#1</tspan><tspan class="hover__date" dx="12">(November 12th, 2016 3:41pm)</tspan><tspan x="52" y="55">Supercharge Git</tspan>
				</text>

				<line x1="0" y1="70" x2="371" y2="70" />

				<text y="89">
					<tspan x="9" dy="1.5" class="codicon hover__link">&#xeafc;</tspan><tspan dx="2" dy="-1.5" class="hover__link">29ad3a0</tspan><tspan dx="9" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xeafd;</tspan><tspan dx="9" dy="-1.5" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xea82;</tspan><tspan dx="9" dy="-1.5" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xeb01;</tspan><tspan dx="9" dy="-1.5" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xea7c;</tspan>
				</text>

				<line x1="0" y1="99" x2="371" y2="99" />

				<text class="hover__diff">
					<tspan class="hover__diff-removed" x="9" y="119">- return git;</tspan>
					<tspan class="hover__diff-added" x="9" y="136">+ return supercharged(git);</tspan>
				</text>

				<line x1="0" y1="147" x2="371" y2="147" />

				<text y="166">
					<tspan x="9">Changes</tspan><tspan dx="12" dy="1.5" class="codicon hover__link">&#xeafc;</tspan><tspan dx="2" dy="-1.5" class="hover__link">3ac1d3f</tspan><tspan dx="9" dy="1.5" class="codicon">&#xea99;</tspan><tspan dx="6" class="codicon hover__link">&#xeafc;</tspan><tspan dx="2" dy="-1.5" class="hover__link">29ad3a0</tspan><tspan dx="9" opacity="0.6">|</tspan><tspan dx="9" dy="1.5" class="codicon hover__link">&#xeafd;</tspan>
				</text>
			</svg>

			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="45" viewBox="0 0 600 43" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g class="codelens">
					<text y="18"><tspan x="38">Eric Amodio, 3 minutes ago | 1 author (Eric Amodio)</tspan></text>
				</g>
				<g class="line">
					<text y="34"><tspan x="7" class="line-number">13</tspan><tspan x="38" class="function-return">return</tspan><tspan dx="6" class="function-name">supercharged</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan><tspan class="cursor">|</tspan><tspan dx="24" class="blame" @mouseover=${this.onMouseOver} @mouseout=${this.onMouseOut}>You, 6 years ago via PR #1 • Supercharge Git</tspan></text>
					<circle class="indicator indicator--pulse" cx="260" cy="20" />
					<circle class="indicator" cx="260" cy="20" />
				</g>
				<!-- <g class="line">
					<text y="34"><tspan x="7" class="line-number">12</tspan><tspan x="38" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan><tspan class="cursor">|</tspan><tspan dx="24" class="blame" data-feature-blame="on">You, 6 years ago via PR #1 • Supercharge Git</tspan></text>
				</g> -->
			</svg>
		`}};vn.styles=_e`
		:host {
			position: relative;

			--gl-svg-indicator-color: var(
				--vscode-activityBarBadge-background,
				dodgerblue
			); //color-mix(in srgb, var(--vscode-activityBarBadge-background) 90%, white);
			--gl-svg-indicator-size: 2.5;
			--gl-svg-indicator-pulse-size: 12; // calc(var(--gl-svg-indicator-size, 3) * 4);
		}

		:host svg:last-child {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.line text {
			font-family: var(--vscode-editor-font-family);
			font-size: var(--vscode-editor-font-size);
			font-weight: var(--vscode-editor-font-weight);
		}

		.cursor {
			fill: var(--vscode-editorCursor-foreground);
		}

		.splitter {
			stroke: var(--vscode-editorGroup-border);
		}

		.punctuation {
			fill: var(--vscode-editor-foreground);
		}

		.function-declaration {
			fill: var(--vscode-symbolIcon-functionForeground);
		}

		.function-name {
			fill: var(--vscode-symbolIcon-colorForeground);
		}

		.function-argument {
			fill: var(--vscode-symbolIcon-variableForeground);
		}

		.function-argument-type {
			fill: var(--vscode-symbolIcon-typeParameterForeground);
		}

		.function-return {
			fill: var(--vscode-debugTokenExpression-name);
		}

		.line-current {
			fill: var(--vscode-editor-lineHighlightBackground);
			stroke: var(--vscode-editor-lineHighlightBorder);
			stroke-width: 0.1rem;
			fill-opacity: 0.8;
		}

		.line-number {
			fill: var(--vscode-editorLineNumber-foreground);
		}

		.line-number-active {
			fill: var(--vscode-editorLineNumber-activeForeground);
		}

		.blame {
			fill: var(--vscode-gitlens-trailingLineForegroundColor);
			cursor: pointer;
		}

		.codelens text {
			font-family: var(--vscode-font-family);
			font-size: var(--vscode-font-size);
			font-weight: var(--vscode-font-weight);

			fill: var(--vscode-editorCodeLens-foreground);
		}
		.codelens text tspan {
			font-size: 0.8em;
		}

		.hover {
			opacity: 0;
			visibility: hidden;
			position: absolute;
			bottom: 30px;
			right: -30px;
			animation-duration: 0.25s;
			animation-timing-function: ease-in-out;
			animation-fill-mode: both;
		}

		.hover rect {
			fill: var(--vscode-editorHoverWidget-background);
			stroke: var(--vscode-editorHoverWidget-border);
			stroke-width: 1;
		}

		.hover line {
			stroke: var(--vscode-editorHoverWidget-border);
			stroke-width: 1;
		}

		.hover text {
			font-family: var(--vscode-font-family);
			font-weight: var(--vscode-font-weight);
			font-size: 1.1rem;

			fill: var(--vscode-editorHoverWidget-foreground);
		}

		.hover__diff tspan {
			font-family: var(--vscode-editor-font-family);
			font-weight: var(--vscode-editor-font-weight);
			font-size: var(--vscode-editor-font-size);
		}

		.hover__diff-removed {
			fill: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.hover__diff-added {
			fill: var(--vscode-gitDecoration-addedResourceForeground);
		}

		.hover__author {
			font-weight: 700;
		}

		.hover__date {
			font-style: italic;
		}

		.hover__link {
			fill: #3794ff !important;
		}

		@keyframes fadeInHover {
			0% {
				opacity: 0;
				visibility: visible;
			}

			100% {
				opacity: 1;
				visibility: visible;
			}
		}

		@keyframes fadeOutHover {
			0% {
				opacity: 1;
				visibility: visible;
			}

			100% {
				opacity: 0;
				visibility: hidden;
			}
		}

		:host([hovering]) {
			z-index: 1000;
		}
		:host([hovered][hovering]) .hover {
			animation-name: fadeInHover;
		}

		:host([hovered]:not([hovering])) .hover {
			animation-name: fadeOutHover;
		}

		.blame,
		.codelens {
			transition: opacity 150ms ease-in-out;
		}

		:host(:not([inline])) .blame,
		:host(:not([codelens])) .codelens {
			cursor: default;
			opacity: 0;
		}

		circle.indicator {
			fill: var(--gl-svg-indicator-color);
			stroke: var(--gl-svg-indicator-color);
			stroke-width: 1;
			r: var(--gl-svg-indicator-size);
			pointer-events: none;
		}

		circle.indicator--pulse {
			animation: 1.05s ease 0s infinite normal none running pulse;
		}

		@keyframes pulse {
			0% {
				stroke-width: 1;
				opacity: 1;
			}
			100% {
				stroke-width: var(--gl-svg-indicator-pulse-size, 12);
				opacity: 0;
			}
		}
	`,yn([Lt({type:Boolean,reflect:!0})],vn.prototype,"inline",2),yn([Lt({type:Boolean,reflect:!0})],vn.prototype,"codelens",2),yn([Lt({type:Boolean,reflect:!0})],vn.prototype,"hovered",2),yn([Lt({type:Boolean,reflect:!0})],vn.prototype,"hovering",2),vn=yn([xt("gk-blame-svg")],vn);var wn=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Hn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?xn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&wn(t,o,r),r};let Vn=class extends lit_element_s{onClick(e){switch(e.target.dataset.feature){case"annotations":{this.annotationsToggled=!this.annotationsToggled;const e=document.getElementById("annotations");e.toggled=!e.toggled;break}case"revision":{this.revisionToggled=!this.revisionToggled;const e=document.getElementById("revision");e.toggled=!e.toggled;break}}this.dispatchEvent(new CustomEvent("click"))}render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="148" height="22" viewBox="-4 -3 147 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				${this.revision?pt`<rect class="icon__revision-bg" x="-4" y="-2.5" width="24" height="20.5" rx="4"/>`:""}
				<text y="16" class="icon ${this.revision?"icon__revision active":"inactive"}">
					<tspan class="glicon">&#xf105;</tspan>
				</text>
				<text y="16" class="icon inactive">
					<tspan dx="25" class="glicon">&#xf101;</tspan><tspan dx="9" class="glicon">&#xf103;</tspan><tspan dx="32" class="codicon">&#xeb56;</tspan><tspan dx="9" class="codicon">&#xea7c;</tspan>
				</text>

				${this.annotationsToggled?pt`<g class="icon icon__annotations">
						<circle cx="83" cy="8" r="7.5" />
						<path
							d="M84.2583 4.71315C84.4119 4.44544 84.4999 4.13329 84.4999 3.79998C84.4999 2.80588 83.7165 2 82.75 2C81.7835 2 81 2.80588 81 3.79998C81 4.62503 81.5397 5.32043 82.2757 5.53309V10.4669C81.5397 10.6796 81 11.375 81 12.2C81 13.1941 81.7835 14 82.75 14C83.7165 14 84.4999 13.1941 84.4999 12.2C84.4999 11.3747 83.96 10.6792 83.2236 10.4667V5.53326C83.3465 5.49782 83.4638 5.44893 83.5741 5.38824L85.2151 7.07621C85.1305 7.26617 85.0834 7.47746 85.0834 7.70007C85.0834 8.52849 85.7363 9.20005 86.5417 9.20005C87.3471 9.20005 88 8.52849 88 7.70007C88 6.87165 87.3471 6.20008 86.5417 6.20008C86.2988 6.20008 86.0697 6.26117 85.8683 6.36922L84.2583 4.71315Z"
						/>
				  </g>`:pt`<text y="16" class="icon ${this.annotations?"icon__annotations":"inactive"}"><tspan dx="75" class="glicon">&#xf113;</tspan></text>`}

				${this.revision?pt`<rect
						class="interactive"
						data-feature="revision"
						x="0"
						y="0"
						width="16"
						height="16"
						fill="transparent"
						stroke="none"
						@click=${this.onClick}
				  >
				  	<title>${this.revisionToggled?"Click to reset simulated revision navigation below\nShowing diff with revision (simulated)":"Click to simulate revision navigation below\nShowing original (simulated)"}</title>
				  </rect>
				  <circle class="indicator indicator--pulse" cx="16" cy="2" />
				  <circle class="indicator" cx="16" cy="2" />`:""}
				${this.annotations?pt`<rect
						class="interactive"
						data-feature="annotations"
						x="75"
						y="0"
						width="16"
						height="16"
						fill="transparent"
						stroke="none"
						@click=${this.onClick}
				  >
				  	<title>${this.annotationsToggled?"Click to simulate toggling the annotation below\nFile annotations are on (simulated)":"Click to simulate toggling the annotation below\nFile annotations are off (simulated)"}</title>
				  </rect>
				  <circle class="indicator indicator--pulse" cx="90" cy="2" />
				  <circle class="indicator" cx="90" cy="2" />`:""}
			</svg>
		`}};Vn.styles=_e`
		:host {
			--gl-svg-indicator-color: var(
				--vscode-activityBarBadge-background,
				dodgerblue
			); //color-mix(in srgb, var(--vscode-activityBarBadge-background) 90%, white);
			--gl-svg-indicator-size: 2.5;
			--gl-svg-indicator-pulse-size: 12; // calc(var(--gl-svg-indicator-size, 3) * 4);
		}

		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			fill: var(--vscode-menu-background);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.interactive {
			cursor: pointer;
		}

		.icon {
			fill: var(--vscode-icon-foreground);
			font-size: 16px;
		}

		.icon.active {
			fill: var(--color-foreground);
		}

		.icon.inactive {
			opacity: 0.6;
		}

		.icon__annotations circle {
			fill: #f05133;
			stroke: none;
		}

		.icon__annotations path {
			fill: var(--vscode-menu-background);
		}

		:host([revision-toggled]) .icon__revision-bg {
			fill: var(--color-foreground);
			opacity: 0.2;
		}
		:host(:not([revision-toggled])) .icon__revision-bg {
			fill: none;
		}

		circle.indicator {
			fill: var(--gl-svg-indicator-color);
			stroke: var(--gl-svg-indicator-color);
			stroke-width: 1;
			r: var(--gl-svg-indicator-size);
			pointer-events: none;
		}

		circle.indicator--pulse {
			animation: 1.05s ease 0s infinite normal none running pulse;
		}

		@keyframes pulse {
			0% {
				stroke-width: 1;
				opacity: 1;
			}
			100% {
				stroke-width: var(--gl-svg-indicator-pulse-size, 12);
				opacity: 0;
			}
		}
	`,Hn([Lt({type:Boolean,reflect:!0})],Vn.prototype,"annotations",2),Hn([Lt({type:Boolean,reflect:!0})],Vn.prototype,"revision",2),Hn([Lt({type:Boolean,reflect:!0,attribute:"annotations-toggled"})],Vn.prototype,"annotationsToggled",2),Hn([Lt({type:Boolean,reflect:!0,attribute:"revision-toggled"})],Vn.prototype,"revisionToggled",2),Vn=Hn([xt("gk-editor-toolbar-svg")],Vn);const Ln=_e`
	:host {
		display: block;
		max-width: 69.2rem;
		width: calc(100% - 2rem);
		margin: 0 1rem 1.3rem;
	}
	:host > svg {
		width: 100%;
		height: auto;
		border: 0.1rem solid var(--vscode-editorWidget-border);
		fill: var(--vscode-editor-background);
	}

	* {
		user-select: none;
	}
`,kn=_e`
	.codicon {
		font-family: codicon;
		cursor: default;
		user-select: none;
	}

	.glicon {
		font-family: glicons;
		cursor: default;
		user-select: none;
	}
`;var Mn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor;let Zn=class extends lit_element_s{render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- a-prettier-ignore -->
			<svg width="850" height="290" viewBox="0 0 850 290" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g>
					<text x="10" y="30" class="heading">
						<tspan>My Pull Requests</tspan>
					</text>
					<text x="100%" y="30.5" class="tabs" text-anchor="end">
						<tspan class="tab" dx="-10">All</tspan>
						<tspan class="tab" dx="6">Opened by me</tspan>
						<tspan class="tab" dx="6">Assigned to me</tspan>
						<tspan class="tab" dx="6">Needs my review</tspan>
						<tspan class="tab" dx="6">Mentions me</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="52" width="100%" height="34" class="row-box" />
					<text x="10" y="75">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="2" class="codicon indicator-error">&#xeb43;</tspan>
						<tspan dx="30" dy="-2">1wk</tspan>
						<tspan dx="30">adds stylelint</tspan>
						<tspan class="link">#2453</tspan>
					</text>
					<text x="100%" y="75" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="40" dy="-2" class="addition">+1735</tspan>
						<tspan dx="2" class="deletion">-748</tspan>
						<tspan dx="40" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="86" width="100%" height="34" class="row-box" />
					<text x="10" y="109">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="2" class="codicon indicator-info">&#xeba4;</tspan>
						<tspan dx="30" dy="-2">1wk</tspan>
						<tspan dx="30">Workspaces side bar view</tspan>
						<tspan class="link">#2650</tspan>
					</text>
					<text x="100%" y="109" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="40" dy="-2" class="addition">+3,556</tspan>
						<tspan dx="2" class="deletion">-136</tspan>
						<tspan dx="34" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="120" width="100%" height="34" class="row-box" />
					<text x="10" y="143">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="2" class="codicon indicator-error">&#xebe6;</tspan>
						<tspan dx="30" dy="-2" class="indicator-warning">3wk</tspan>
						<tspan dx="29">Adds experimental.OpenAIModel</tspan>
						<tspan class="link">#2637</tspan>
					</text>
					<text x="100%" y="143" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="40" dy="-2" class="addition">+79</tspan>
						<tspan dx="2" class="deletion">-12</tspan>
						<tspan dx="72" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="154" width="100%" height="34" class="row-box" />
					<text x="10" y="177">
						<tspan dx="2" dy="2" class="codicon">&#xea64;</tspan>
						<tspan dx="54" dy="-2" class="indicator-error">2mo</tspan>
						<tspan dx="29">adds focus view</tspan>
						<tspan class="link">#2516</tspan>
					</text>
					<text x="100%" y="177" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="39" dy="-2" class="addition">+3,327</tspan>
						<tspan dx="2" class="deletion">-28</tspan>
						<tspan dx="45" dy="2" class="glicon">&#xf118;</tspan>
					</text>
				</g>
				<g>
					<text x="10" y="232" class="heading">
						<tspan>My Issues</tspan>
					</text>
					<text x="100%" y="232.5" class="tabs" text-anchor="end">
						<tspan class="tab" dx="-10">All</tspan>
						<tspan class="tab" dx="6">Opened by me</tspan>
						<tspan class="tab" dx="6">Assigned to me</tspan>
						<tspan class="tab" dx="6">Mentions me</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="255" width="100%" height="30" class="row-box" />
					<text x="10" y="278">
						<tspan dx="2" dy="2" class="codicon">&#xeb0c;</tspan>
						<tspan dx="54" dy="-2" class="indicator-error">2mo</tspan>
						<tspan dx="30">Labs: add AI explain panel to Inspect</tspan>
						<tspan class="link">#2628</tspan>
					</text>
					<text x="100%" y="278" text-anchor="end">
						<tspan dx="-10" dy="2" class="codicon">&#xeb99;</tspan>
						<tspan dx="10" dy="0.5" class="codicon">&#xeb01;</tspan>
					</text>
				</g>
			</svg>
		`}};Zn.styles=[Ln,kn,_e`
			text {
				fill: var(--vscode-foreground);
				font-size: 18px;
			}
			.heading {
				font-weight: 600;
				font-size: 20px;
			}

			.codicon {
				font-family: codicon;
				cursor: default;
				user-select: none;
			}

			.glicon {
				font-family: glicons;
				cursor: default;
				user-select: none;
			}
			.indicator-info {
				fill: var(--vscode-problemsInfoIcon-foreground);
			}
			.indicator-warning {
				fill: var(--vscode-problemsWarningIcon-foreground);
			}
			.indicator-error {
				fill: var(--vscode-problemsErrorIcon-foreground);
			}
			.tabs {
			}
			.tab {
				text-decoration: underline;
				opacity: 0.8;
				font-size: 16px;
				cursor: pointer;
			}
			.row-box {
				fill: var(--vscode-foreground);
				opacity: 0;
			}
			.row:hover .row-box {
				opacity: 0.06;
			}
			.link {
				fill: var(--vscode-textLink-foreground);
				cursor: pointer;
			}
			.link:hover {
				text-decoration: underline;
			}
			.addition {
				fill: var(--vscode-gitDecoration-addedResourceForeground);
			}
			.deletion {
				fill: var(--vscode-gitDecoration-deletedResourceForeground);
			}
		`],Zn=((e,t,o,i)=>{for(var s,r=i>1?void 0:i?_n(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Mn(t,o,r),r})([xt("gk-focus-svg")],Zn);var $n=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor;let Pn=class extends lit_element_s{render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="850" height="290" viewBox="0 0 850 290" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect class="lane2-background" x="70" y="46" width="126" height="19" rx="4"/>
				<text class="branch branch-current" x="74" y="59"><tspan dy="1" class="codicon">&#xeab2;</tspan><tspan dx="4" class="codicon">&#xea7a;</tspan><tspan dx="6" dy="-1">main</tspan></text>

				<rect class="lane3-background" opacity="0.5" x="70" y="73" width="126" height="19" rx="4"/>
				<text class="branch" x="74" y="87"><tspan dy="1" class="codicon">&#xebaa;</tspan><tspan dx="4" class="codicon">&#xea64;</tspan><tspan dx="6" dy="-1">feature/onboard</tspan></text>

				<rect class="lane4-background" opacity="0.5" x="70" y="99" width="126" height="19" rx="4"/>
				<text class="branch" x="74" y="113"><tspan dy="1" class="codicon">&#xea7a;</tspan><tspan dx="4" class="codicon">&#xea64;</tspan><tspan dx="6" dy="-1">feature/graph</tspan></text>

				<rect class="lane5-background" opacity="0.5" x="70" y="237" width="126" height="19" rx="4"/>
				<text class="branch" x="74" y="251"><tspan dy="1" class="codicon">&#xea7a;</tspan><tspan dx="6" dy="-1">bug/crash</tspan></text>

				<rect class="lane1-background" opacity="0.2" x="216" y="20" width="128" height="18"/>
				<rect class="lane1-background" x="342" y="20" width="2" height="18"/>

				<line class="lane2-foreground" opacity="0.4" x1="196" y1="56" x2="230" y2="56" stroke-width="2"/>
				<rect class="lane2-background" opacity="0.2" x="238" y="47" width="106" height="18"/>
				<rect class="lane2-background" x="342" y="47" width="2" height="18"/>

				<rect class="lane2-background" opacity="0.2" x="238" y="128" width="106" height="18" />
				<rect class="lane2-background" x="342" y="128" width="2" height="18"/>

				<rect class="lane2-background" opacity="0.2" x="238" y="263" width="106" height="18"/>
				<rect class="lane2-background" x="342" y="263" width="2" height="18"/>

				<line class="lane3-foreground" opacity="0.4" x1="196" y1="83" x2="253" y2="83" stroke-width="2"/>
				<rect class="lane3-background" opacity="0.2" x="260" y="74" width="84" height="18"/>
				<rect class="lane3-background" x="342" y="74" width="2" height="18"/>

				<rect class="lane3-background" opacity="0.2" x="260" y="155" width="84" height="18"/>
				<rect class="lane3-background" x="342" y="155" width="2" height="18"/>

				<rect class="lane3-background" opacity="0.2" x="260" y="209" width="84" height="18"/>
				<rect class="lane3-background" x="342" y="209" width="2" height="18"/>

				<line class="lane4-foreground" opacity="0.4" x1="196" y1="109" x2="275" y2="109" stroke-width="2"/>
				<rect class="lane4-background" opacity="0.2" x="282" y="101" width="62" height="18"/>
				<rect class="lane4-background" x="342" y="101" width="2" height="18"/>

				<rect class="lane4-background" x="342" y="182" width="2" height="18"/>
				<rect class="lane4-background" opacity="0.2" x="282" y="182" width="62" height="18"/>

				<line class="lane5-foreground" opacity="0.3" x1="196" y1="246" x2="297" y2="246" stroke-width="2"/>
				<rect class="lane5-background" opacity="0.2" x="304" y="236" width="40" height="18"/>
				<rect class="lane5-background" x="342" y="236" width="2" height="18"/>
				<path class="lane5-foreground" d="M239 270.74H297C301.418 270.74 305 267.158 305 262.74V247" fill="none" stroke-width="2"/>

				<line class="lane1-foreground" x1="217" y1="38" x2="217" y2="319" stroke-width="2" stroke-dasharray="4 4"/>
				<circle class="lane1-foreground container" cx="217" cy="29" r="8" stroke-width="2" stroke-dasharray="4 4"/>

				<rect class="lane2-background" x="238" y="47" width="2" height="332"/>
				<circle class="lane2-foreground container" cx="239" cy="56" r="8" stroke-width="2"/>
				<circle class="lane2-foreground container" cx="239" cy="137" r="8" stroke-width="2"/>
				<circle class="lane2-foreground container" cx="239" cy="271" r="8" stroke-width="2"/>

				<rect class="lane3-background" x="260" y="74" width="2" height="305"/>
				<circle class="lane3-foreground container" cx="261" cy="83" r="8" stroke-width="2"/>
				<circle class="lane3-foreground container" cx="261" cy="164" r="8" stroke-width="2"/>
				<circle class="lane3-foreground container" cx="261" cy="218" r="8" stroke-width="2"/>

				<rect class="lane4-background" x="282" y="106" width="2" height="209"/>
				<circle class="lane4-foreground container" cx="283" cy="110" r="8" stroke-width="2"/>
				<circle class="lane4-foreground container" cx="283" cy="191" r="8" stroke-width="2"/>

				<circle class="lane5-foreground container" cx="305" cy="245" r="8" stroke-width="2"/>

				<text x="366" y="33.5" class="foreground wip"><tspan>Work in progress</tspan><tspan dx="9" dy="1" class="codicon">&#xea73;</tspan><tspan dx="3" dy="-1">2</tspan><tspan dx="9" dy="1" class="codicon">&#xea60;</tspan><tspan dx="3" dy="-1">1</tspan></text>
				<text class="foreground messages">
					<tspan x="366" y="59.5">Improves performance &amp; reduces bundle size</tspan>
					<tspan x="366" y="86.5">Adds brand new welcome experience</tspan>
					<tspan x="366" y="113.5">Adds new Commit Graph panel layout</tspan>
					<tspan x="366" y="140.5">Optimizes startup performance</tspan>
					<tspan x="366" y="167.5">Revamps Home view experience for better utility</tspan>
					<tspan x="366" y="194.5">Optimizes Commit Graph loading performance</tspan>
					<tspan x="366" y="221.5">Adds new GitLens Inspect side bar for a better experience</tspan>
					<tspan x="366" y="248.5">Fixes crash when run on a phone</tspan>
					<tspan x="366" y="275.5">Updates package dependencies</tspan>
				</text>

				<text class="foreground authors">
					<tspan x="696" y="59.5">Eric Amodio</tspan>
					<tspan x="696" y="86.5">Keith Daulton</tspan>
					<tspan x="696" y="113.5">Eric Amodio</tspan>
					<tspan x="696" y="140.5">Ramin Tadayon</tspan>
					<tspan x="696" y="167.5">Keith Daulton</tspan>
					<tspan x="696" y="194.5">Eric Amodio</tspan>
					<tspan x="696" y="221.5">Keith Daulton</tspan>
					<tspan x="696" y="248.5">Ramin Tadayon</tspan>
					<tspan x="696" y="275.5">Ramin Tadayon</tspan>
				</text>
			</svg>
		`}};Pn.styles=_e`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
			fill: var(--vscode-editor-background);
		}

		* {
			user-select: none;
		}

		text {
			font-family: var(--vscode-font-family);
			font-weight: var(--vscode-font-weight);
			font-size: 1.1rem;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.foreground {
			fill: var(--vscode-editor-foreground);
		}

		.branch {
			fill: white;
		}

		.branch-current {
			font-weight: 700 !important;
		}

		.messages {
			opacity: 0.7;
		}

		.authors {
			opacity: 0.45;
		}

		.wip {
			opacity: 0.45;
		}

		.lane1-foreground {
			stroke: var(--vscode-gitlens-graphLane1Color);
		}
		.lane1-background {
			fill: var(--vscode-gitlens-graphLane1Color);
		}

		.lane2-foreground {
			stroke: var(--vscode-gitlens-graphLane2Color);
		}
		.lane2-background {
			fill: var(--vscode-gitlens-graphLane2Color);
		}

		.lane3-foreground {
			stroke: var(--vscode-gitlens-graphLane3Color);
		}
		.lane3-background {
			fill: var(--vscode-gitlens-graphLane3Color);
		}

		.lane4-foreground {
			stroke: var(--vscode-gitlens-graphLane4Color);
		}
		.lane4-background {
			fill: var(--vscode-gitlens-graphLane4Color);
		}

		.lane5-foreground {
			stroke: var(--vscode-gitlens-graphLane5Color);
		}
		.lane5-background {
			fill: var(--vscode-gitlens-graphLane5Color);
		}
	`,Pn=((e,t,o,i)=>{for(var s,r=i>1?void 0:i?Sn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&$n(t,o,r),r})([xt("gk-graph-svg")],Pn);var Rn=Object.defineProperty,An=Object.getOwnPropertyDescriptor;let Dn=class extends lit_element_s{render(){return dt` <!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="252" viewBox="0 0 600 252" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect id="container" x="0.5" y="0.5" width="599" height="251" rx="5.5" fill="var(--vscode-quickInput-background)" stroke="var(--vscode-widget-border)"/>
<line id="divider-1" x1="7" y1="128.5" x2="594" y2="128.5" stroke="var(--vscode-pickerGroup-border)"/>
<line id="divider-2" x1="7" y1="199.5" x2="594" y2="199.5" stroke="var(--vscode-pickerGroup-border)"/>
<line id="divider-3"  x1="7" y1="222.5" x2="594" y2="222.5" stroke="var(--vscode-pickerGroup-border)"/>
<path id="row-1-2ndline" opacity="0.7" d="M47.7528 113.5H46.608C46.5402 113.171 46.4218 112.881 46.2525 112.632C46.0863 112.383 45.8832 112.174 45.6431 112.004C45.4061 111.832 45.143 111.703 44.8537 111.616C44.5644 111.53 44.2628 111.487 43.9489 111.487C43.3764 111.487 42.8578 111.632 42.3931 111.921C41.9315 112.21 41.5637 112.637 41.2898 113.2C41.0189 113.763 40.8835 114.454 40.8835 115.273C40.8835 116.091 41.0189 116.782 41.2898 117.346C41.5637 117.909 41.9315 118.335 42.3931 118.624C42.8578 118.914 43.3764 119.058 43.9489 119.058C44.2628 119.058 44.5644 119.015 44.8537 118.929C45.143 118.843 45.4061 118.715 45.6431 118.546C45.8832 118.373 46.0863 118.163 46.2525 117.913C46.4218 117.661 46.5402 117.372 46.608 117.045H47.7528C47.6667 117.529 47.5097 117.961 47.282 118.343C47.0542 118.724 46.7711 119.049 46.4325 119.317C46.094 119.581 45.7139 119.783 45.2923 119.922C44.8737 120.06 44.4259 120.129 43.9489 120.129C43.1425 120.129 42.4254 119.932 41.7976 119.538C41.1697 119.144 40.6758 118.584 40.3157 117.858C39.9556 117.132 39.7756 116.27 39.7756 115.273C39.7756 114.276 39.9556 113.414 40.3157 112.688C40.6758 111.961 41.1697 111.401 41.7976 111.007C42.4254 110.613 43.1425 110.416 43.9489 110.416C44.4259 110.416 44.8737 110.485 45.2923 110.624C45.7139 110.762 46.094 110.966 46.4325 111.233C46.7711 111.498 47.0542 111.821 47.282 112.203C47.5097 112.581 47.6667 113.014 47.7528 113.5ZM52.3358 120.148C51.6957 120.148 51.134 119.995 50.6508 119.691C50.1707 119.386 49.7952 118.96 49.5244 118.412C49.2567 117.864 49.1228 117.224 49.1228 116.491C49.1228 115.753 49.2567 115.108 49.5244 114.557C49.7952 114.006 50.1707 113.578 50.6508 113.274C51.134 112.969 51.6957 112.817 52.3358 112.817C52.976 112.817 53.5361 112.969 54.0162 113.274C54.4994 113.578 54.8749 114.006 55.1427 114.557C55.4135 115.108 55.5489 115.753 55.5489 116.491C55.5489 117.224 55.4135 117.864 55.1427 118.412C54.8749 118.96 54.4994 119.386 54.0162 119.691C53.5361 119.995 52.976 120.148 52.3358 120.148ZM52.3358 119.169C52.8221 119.169 53.2222 119.044 53.5361 118.795C53.8501 118.546 54.0824 118.218 54.2332 117.812C54.384 117.406 54.4594 116.965 54.4594 116.491C54.4594 116.018 54.384 115.576 54.2332 115.167C54.0824 114.757 53.8501 114.426 53.5361 114.174C53.2222 113.922 52.8221 113.795 52.3358 113.795C51.8496 113.795 51.4495 113.922 51.1356 114.174C50.8216 114.426 50.5893 114.757 50.4385 115.167C50.2877 115.576 50.2123 116.018 50.2123 116.491C50.2123 116.965 50.2877 117.406 50.4385 117.812C50.5893 118.218 50.8216 118.546 51.1356 118.795C51.4495 119.044 51.8496 119.169 52.3358 119.169ZM59.8896 120.148C59.2987 120.148 58.777 119.998 58.3246 119.7C57.8722 119.398 57.5182 118.974 57.2628 118.426C57.0073 117.875 56.8796 117.224 56.8796 116.473C56.8796 115.728 57.0073 115.082 57.2628 114.534C57.5182 113.986 57.8737 113.563 58.3292 113.265C58.7847 112.966 59.311 112.817 59.908 112.817C60.3697 112.817 60.7344 112.894 61.0021 113.048C61.273 113.198 61.4792 113.371 61.6207 113.565C61.7654 113.755 61.8777 113.912 61.9577 114.036H62.0501V110.545H63.1396V120H62.087V118.911H61.9577C61.8777 119.04 61.7638 119.203 61.6161 119.4C61.4684 119.594 61.2576 119.768 60.9837 119.922C60.7098 120.072 60.3451 120.148 59.8896 120.148ZM60.0373 119.169C60.4743 119.169 60.8436 119.055 61.1452 118.827C61.4469 118.597 61.6761 118.278 61.8331 117.872C61.9901 117.462 62.0685 116.99 62.0685 116.455C62.0685 115.925 61.9916 115.462 61.8377 115.065C61.6838 114.665 61.4561 114.354 61.1545 114.132C60.8529 113.908 60.4805 113.795 60.0373 113.795C59.5756 113.795 59.1909 113.914 58.8832 114.151C58.5785 114.385 58.3492 114.703 58.1953 115.107C58.0445 115.507 57.9691 115.956 57.9691 116.455C57.9691 116.959 58.046 117.418 58.1999 117.83C58.3569 118.24 58.5877 118.566 58.8924 118.809C59.2002 119.049 59.5818 119.169 60.0373 119.169ZM68.2592 120.148C67.576 120.148 66.9866 119.997 66.4911 119.695C65.9987 119.391 65.6186 118.966 65.3509 118.421C65.0862 117.873 64.9538 117.236 64.9538 116.51C64.9538 115.784 65.0862 115.143 65.3509 114.589C65.6186 114.032 65.991 113.598 66.468 113.288C66.9482 112.974 67.5083 112.817 68.1484 112.817C68.5178 112.817 68.8825 112.878 69.2425 113.001C69.6026 113.125 69.9304 113.325 70.2259 113.602C70.5213 113.875 70.7567 114.239 70.9322 114.691C71.1076 115.143 71.1953 115.701 71.1953 116.362V116.824H65.7294V115.882H70.0874C70.0874 115.482 70.0073 115.125 69.8473 114.811C69.6903 114.497 69.4657 114.249 69.1733 114.068C68.884 113.886 68.5424 113.795 68.1484 113.795C67.7145 113.795 67.339 113.903 67.022 114.119C66.7081 114.331 66.4665 114.608 66.2972 114.95C66.128 115.291 66.0433 115.657 66.0433 116.048V116.676C66.0433 117.212 66.1357 117.666 66.3203 118.038C66.508 118.407 66.7681 118.689 67.1005 118.883C67.4329 119.074 67.8191 119.169 68.2592 119.169C68.5455 119.169 68.804 119.129 69.0348 119.049C69.2687 118.966 69.4703 118.843 69.6396 118.68C69.8088 118.513 69.9396 118.307 70.032 118.061L71.0845 118.357C70.9737 118.714 70.7875 119.027 70.5259 119.298C70.2643 119.566 69.9412 119.775 69.5565 119.926C69.1718 120.074 68.7393 120.148 68.2592 120.148ZM81.8271 112.909C81.7717 112.441 81.547 112.078 81.1531 111.82C80.7591 111.561 80.2759 111.432 79.7035 111.432C79.2849 111.432 78.9187 111.5 78.6048 111.635C78.2939 111.77 78.0508 111.957 77.8754 112.194C77.703 112.431 77.6168 112.7 77.6168 113.001C77.6168 113.254 77.6768 113.471 77.7969 113.652C77.92 113.831 78.0769 113.98 78.2678 114.1C78.4586 114.217 78.6586 114.314 78.8679 114.391C79.0772 114.465 79.2695 114.525 79.445 114.571L80.4052 114.83C80.6514 114.894 80.9253 114.983 81.2269 115.097C81.5316 115.211 81.8224 115.367 82.0994 115.564C82.3795 115.757 82.6103 116.007 82.7919 116.311C82.9735 116.616 83.0643 116.99 83.0643 117.433C83.0643 117.944 82.9304 118.406 82.6626 118.818C82.398 119.231 82.0102 119.558 81.4993 119.801C80.9915 120.045 80.3744 120.166 79.6481 120.166C78.971 120.166 78.3847 120.057 77.8892 119.838C77.3968 119.62 77.009 119.315 76.7259 118.924C76.4458 118.533 76.2873 118.08 76.2504 117.562H77.4322C77.4629 117.92 77.583 118.215 77.7923 118.449C78.0046 118.68 78.2724 118.852 78.5955 118.966C78.9218 119.077 79.2726 119.132 79.6481 119.132C80.0851 119.132 80.4775 119.061 80.8253 118.92C81.1731 118.775 81.4485 118.575 81.6516 118.32C81.8548 118.061 81.9563 117.759 81.9563 117.415C81.9563 117.101 81.8686 116.845 81.6932 116.648C81.5178 116.451 81.2869 116.291 81.0007 116.168C80.7145 116.045 80.4052 115.937 80.0728 115.845L78.9094 115.513C78.1708 115.3 77.5861 114.997 77.1552 114.603C76.7243 114.209 76.5089 113.694 76.5089 113.057C76.5089 112.527 76.652 112.066 76.9382 111.672C77.2275 111.275 77.6153 110.967 78.1016 110.749C78.5909 110.527 79.1372 110.416 79.7404 110.416C80.3498 110.416 80.8915 110.525 81.3654 110.744C81.8394 110.959 82.2148 111.255 82.4918 111.63C82.7719 112.006 82.9196 112.432 82.935 112.909H81.8271ZM89.2677 117.101V112.909H90.3572V120H89.2677V118.8H89.1938C89.0276 119.16 88.7691 119.466 88.4182 119.718C88.0674 119.968 87.6242 120.092 87.0887 120.092C86.6455 120.092 86.2516 119.995 85.9069 119.801C85.5622 119.605 85.2913 119.309 85.0944 118.915C84.8974 118.518 84.7989 118.018 84.7989 117.415V112.909H85.8884V117.341C85.8884 117.858 86.0331 118.27 86.3224 118.578C86.6147 118.886 86.9871 119.04 87.4395 119.04C87.7104 119.04 87.9858 118.971 88.2659 118.832C88.549 118.694 88.786 118.481 88.9768 118.195C89.1707 117.909 89.2677 117.544 89.2677 117.101ZM95.2148 122.807C94.6886 122.807 94.2362 122.739 93.8576 122.604C93.479 122.471 93.1636 122.296 92.9112 122.077C92.6619 121.862 92.4634 121.631 92.3157 121.385L93.1836 120.776C93.2821 120.905 93.4067 121.053 93.5575 121.219C93.7083 121.388 93.9145 121.534 94.1761 121.657C94.4408 121.783 94.7871 121.847 95.2148 121.847C95.7873 121.847 96.2597 121.708 96.6321 121.431C97.0045 121.154 97.1907 120.72 97.1907 120.129V118.689H97.0984C97.0183 118.818 96.9045 118.978 96.7567 119.169C96.6121 119.357 96.4028 119.525 96.1289 119.672C95.8581 119.817 95.4918 119.889 95.0302 119.889C94.4577 119.889 93.9438 119.754 93.4883 119.483C93.0359 119.212 92.6773 118.818 92.4126 118.301C92.151 117.784 92.0202 117.156 92.0202 116.418C92.0202 115.691 92.148 115.059 92.4034 114.52C92.6589 113.979 93.0143 113.56 93.4698 113.265C93.9253 112.966 94.4516 112.817 95.0487 112.817C95.5103 112.817 95.8765 112.894 96.1474 113.048C96.4213 113.198 96.6306 113.371 96.7752 113.565C96.9229 113.755 97.0368 113.912 97.1168 114.036H97.2276V112.909H98.2802V120.203C98.2802 120.812 98.1417 121.308 97.8647 121.69C97.5908 122.074 97.2215 122.356 96.7567 122.534C96.2951 122.716 95.7811 122.807 95.2148 122.807ZM95.1779 118.911C95.6149 118.911 95.9843 118.81 96.2859 118.61C96.5875 118.41 96.8168 118.123 96.9737 117.747C97.1307 117.372 97.2092 116.922 97.2092 116.399C97.2092 115.888 97.1322 115.437 96.9783 115.047C96.8245 114.656 96.5967 114.349 96.2951 114.128C95.9935 113.906 95.6211 113.795 95.1779 113.795C94.7163 113.795 94.3316 113.912 94.0238 114.146C93.7191 114.38 93.4898 114.694 93.3359 115.088C93.1851 115.482 93.1097 115.919 93.1097 116.399C93.1097 116.892 93.1867 117.327 93.3406 117.706C93.4975 118.081 93.7283 118.377 94.033 118.592C94.3408 118.804 94.7224 118.911 95.1779 118.911ZM103.137 122.807C102.61 122.807 102.158 122.739 101.779 122.604C101.401 122.471 101.085 122.296 100.833 122.077C100.584 121.862 100.385 121.631 100.238 121.385L101.105 120.776C101.204 120.905 101.329 121.053 101.479 121.219C101.63 121.388 101.836 121.534 102.098 121.657C102.363 121.783 102.709 121.847 103.137 121.847C103.709 121.847 104.182 121.708 104.554 121.431C104.926 121.154 105.113 120.72 105.113 120.129V118.689H105.02C104.94 118.818 104.826 118.978 104.679 119.169C104.534 119.357 104.325 119.525 104.051 119.672C103.78 119.817 103.414 119.889 102.952 119.889C102.38 119.889 101.866 119.754 101.41 119.483C100.958 119.212 100.599 118.818 100.335 118.301C100.073 117.784 99.9421 117.156 99.9421 116.418C99.9421 115.691 100.07 115.059 100.325 114.52C100.581 113.979 100.936 113.56 101.392 113.265C101.847 112.966 102.373 112.817 102.971 112.817C103.432 112.817 103.798 112.894 104.069 113.048C104.343 113.198 104.552 113.371 104.697 113.565C104.845 113.755 104.959 113.912 105.039 114.036H105.15V112.909H106.202V120.203C106.202 120.812 106.064 121.308 105.787 121.69C105.513 122.074 105.143 122.356 104.679 122.534C104.217 122.716 103.703 122.807 103.137 122.807ZM103.1 118.911C103.537 118.911 103.906 118.81 104.208 118.61C104.509 118.41 104.739 118.123 104.896 117.747C105.053 117.372 105.131 116.922 105.131 116.399C105.131 115.888 105.054 115.437 104.9 115.047C104.746 114.656 104.519 114.349 104.217 114.128C103.915 113.906 103.543 113.795 103.1 113.795C102.638 113.795 102.253 113.912 101.946 114.146C101.641 114.38 101.412 114.694 101.258 115.088C101.107 115.482 101.032 115.919 101.032 116.399C101.032 116.892 101.109 117.327 101.262 117.706C101.419 118.081 101.65 118.377 101.955 118.592C102.263 118.804 102.644 118.911 103.1 118.911ZM111.169 120.148C110.486 120.148 109.897 119.997 109.401 119.695C108.909 119.391 108.529 118.966 108.261 118.421C107.996 117.873 107.864 117.236 107.864 116.51C107.864 115.784 107.996 115.143 108.261 114.589C108.529 114.032 108.901 113.598 109.378 113.288C109.858 112.974 110.418 112.817 111.059 112.817C111.428 112.817 111.793 112.878 112.153 113.001C112.513 113.125 112.841 113.325 113.136 113.602C113.431 113.875 113.667 114.239 113.842 114.691C114.018 115.143 114.105 115.701 114.105 116.362V116.824H108.64V115.882H112.998C112.998 115.482 112.917 115.125 112.757 114.811C112.6 114.497 112.376 114.249 112.083 114.068C111.794 113.886 111.453 113.795 111.059 113.795C110.625 113.795 110.249 113.903 109.932 114.119C109.618 114.331 109.377 114.608 109.207 114.95C109.038 115.291 108.953 115.657 108.953 116.048V116.676C108.953 117.212 109.046 117.666 109.23 118.038C109.418 118.407 109.678 118.689 110.011 118.883C110.343 119.074 110.729 119.169 111.169 119.169C111.456 119.169 111.714 119.129 111.945 119.049C112.179 118.966 112.38 118.843 112.55 118.68C112.719 118.513 112.85 118.307 112.942 118.061L113.995 118.357C113.884 118.714 113.698 119.027 113.436 119.298C113.174 119.566 112.851 119.775 112.467 119.926C112.082 120.074 111.65 120.148 111.169 120.148ZM120.786 114.497L119.807 114.774C119.745 114.611 119.654 114.453 119.534 114.299C119.417 114.142 119.257 114.012 119.054 113.911C118.851 113.809 118.591 113.759 118.274 113.759C117.84 113.759 117.479 113.859 117.189 114.059C116.903 114.256 116.76 114.506 116.76 114.811C116.76 115.082 116.858 115.296 117.055 115.453C117.252 115.61 117.56 115.741 117.979 115.845L119.031 116.104C119.665 116.258 120.138 116.493 120.449 116.81C120.759 117.124 120.915 117.529 120.915 118.024C120.915 118.43 120.798 118.794 120.564 119.114C120.333 119.434 120.01 119.686 119.594 119.871C119.179 120.055 118.696 120.148 118.145 120.148C117.422 120.148 116.823 119.991 116.349 119.677C115.875 119.363 115.575 118.904 115.449 118.301L116.483 118.043C116.581 118.424 116.768 118.71 117.042 118.901C117.319 119.092 117.68 119.188 118.126 119.188C118.634 119.188 119.037 119.08 119.336 118.864C119.638 118.646 119.788 118.384 119.788 118.08C119.788 117.833 119.702 117.627 119.53 117.461C119.357 117.292 119.093 117.165 118.736 117.082L117.554 116.805C116.905 116.652 116.428 116.413 116.123 116.09C115.821 115.764 115.67 115.356 115.67 114.866C115.67 114.466 115.783 114.112 116.007 113.805C116.235 113.497 116.545 113.255 116.935 113.08C117.329 112.904 117.776 112.817 118.274 112.817C118.976 112.817 119.527 112.971 119.927 113.278C120.33 113.586 120.616 113.992 120.786 114.497ZM125.639 112.909V113.832H121.964V112.909H125.639ZM123.035 111.21H124.124V117.969C124.124 118.277 124.169 118.507 124.258 118.661C124.351 118.812 124.468 118.914 124.609 118.966C124.754 119.015 124.906 119.04 125.066 119.04C125.186 119.04 125.285 119.034 125.362 119.021C125.439 119.006 125.5 118.994 125.546 118.984L125.768 119.963C125.694 119.991 125.591 120.018 125.459 120.046C125.326 120.077 125.158 120.092 124.955 120.092C124.648 120.092 124.346 120.026 124.051 119.894C123.758 119.761 123.515 119.56 123.321 119.289C123.13 119.018 123.035 118.677 123.035 118.264V111.21ZM127.277 120V112.909H128.367V120H127.277ZM127.831 111.727C127.619 111.727 127.436 111.655 127.282 111.51C127.131 111.366 127.056 111.192 127.056 110.989C127.056 110.786 127.131 110.612 127.282 110.467C127.436 110.322 127.619 110.25 127.831 110.25C128.044 110.25 128.225 110.322 128.376 110.467C128.53 110.612 128.607 110.786 128.607 110.989C128.607 111.192 128.53 111.366 128.376 111.51C128.225 111.655 128.044 111.727 127.831 111.727ZM133.243 120.148C132.603 120.148 132.041 119.995 131.558 119.691C131.078 119.386 130.702 118.96 130.432 118.412C130.164 117.864 130.03 117.224 130.03 116.491C130.03 115.753 130.164 115.108 130.432 114.557C130.702 114.006 131.078 113.578 131.558 113.274C132.041 112.969 132.603 112.817 133.243 112.817C133.883 112.817 134.443 112.969 134.923 113.274C135.407 113.578 135.782 114.006 136.05 114.557C136.321 115.108 136.456 115.753 136.456 116.491C136.456 117.224 136.321 117.864 136.05 118.412C135.782 118.96 135.407 119.386 134.923 119.691C134.443 119.995 133.883 120.148 133.243 120.148ZM133.243 119.169C133.729 119.169 134.129 119.044 134.443 118.795C134.757 118.546 134.99 118.218 135.14 117.812C135.291 117.406 135.367 116.965 135.367 116.491C135.367 116.018 135.291 115.576 135.14 115.167C134.99 114.757 134.757 114.426 134.443 114.174C134.129 113.922 133.729 113.795 133.243 113.795C132.757 113.795 132.357 113.922 132.043 114.174C131.729 114.426 131.497 114.757 131.346 115.167C131.195 115.576 131.119 116.018 131.119 116.491C131.119 116.965 131.195 117.406 131.346 117.812C131.497 118.218 131.729 118.546 132.043 118.795C132.357 119.044 132.757 119.169 133.243 119.169ZM139.209 115.734V120H138.119V112.909H139.172V114.017H139.264C139.43 113.657 139.683 113.368 140.021 113.149C140.36 112.928 140.797 112.817 141.332 112.817C141.812 112.817 142.233 112.915 142.593 113.112C142.953 113.306 143.233 113.602 143.433 113.999C143.633 114.393 143.733 114.891 143.733 115.494V120H142.643V115.568C142.643 115.011 142.499 114.577 142.209 114.266C141.92 113.952 141.523 113.795 141.018 113.795C140.671 113.795 140.36 113.871 140.086 114.022C139.815 114.172 139.601 114.393 139.444 114.682C139.287 114.971 139.209 115.322 139.209 115.734ZM150.746 114.497L149.768 114.774C149.706 114.611 149.615 114.453 149.495 114.299C149.378 114.142 149.218 114.012 149.015 113.911C148.812 113.809 148.552 113.759 148.235 113.759C147.801 113.759 147.44 113.859 147.15 114.059C146.864 114.256 146.721 114.506 146.721 114.811C146.721 115.082 146.819 115.296 147.016 115.453C147.213 115.61 147.521 115.741 147.94 115.845L148.992 116.104C149.626 116.258 150.099 116.493 150.409 116.81C150.72 117.124 150.876 117.529 150.876 118.024C150.876 118.43 150.759 118.794 150.525 119.114C150.294 119.434 149.971 119.686 149.555 119.871C149.14 120.055 148.657 120.148 148.106 120.148C147.383 120.148 146.784 119.991 146.31 119.677C145.836 119.363 145.536 118.904 145.41 118.301L146.444 118.043C146.542 118.424 146.729 118.71 147.002 118.901C147.279 119.092 147.641 119.188 148.087 119.188C148.595 119.188 148.998 119.08 149.297 118.864C149.598 118.646 149.749 118.384 149.749 118.08C149.749 117.833 149.663 117.627 149.491 117.461C149.318 117.292 149.054 117.165 148.697 117.082L147.515 116.805C146.866 116.652 146.388 116.413 146.084 116.09C145.782 115.764 145.631 115.356 145.631 114.866C145.631 114.466 145.744 114.112 145.968 113.805C146.196 113.497 146.505 113.255 146.896 113.08C147.29 112.904 147.737 112.817 148.235 112.817C148.937 112.817 149.488 112.971 149.888 113.278C150.291 113.586 150.577 113.992 150.746 114.497ZM158.831 117.304C158.459 117.304 158.119 117.213 157.811 117.032C157.503 116.847 157.257 116.601 157.072 116.293C156.891 115.985 156.8 115.645 156.8 115.273C156.8 114.897 156.891 114.557 157.072 114.252C157.257 113.945 157.503 113.7 157.811 113.518C158.119 113.334 158.459 113.241 158.831 113.241C159.207 113.241 159.547 113.334 159.851 113.518C160.159 113.7 160.404 113.945 160.585 114.252C160.77 114.557 160.862 114.897 160.862 115.273C160.862 115.645 160.77 115.985 160.585 116.293C160.404 116.601 160.159 116.847 159.851 117.032C159.547 117.213 159.207 117.304 158.831 117.304ZM170.077 120.129C169.535 120.129 169.047 120.022 168.613 119.806C168.179 119.591 167.832 119.295 167.57 118.92C167.308 118.544 167.165 118.116 167.141 117.636H168.249C168.292 118.064 168.486 118.418 168.83 118.698C169.178 118.975 169.594 119.114 170.077 119.114C170.465 119.114 170.809 119.023 171.111 118.841C171.416 118.66 171.654 118.41 171.826 118.093C172.002 117.773 172.09 117.412 172.09 117.009C172.09 116.596 171.999 116.228 171.817 115.905C171.639 115.579 171.392 115.322 171.079 115.134C170.765 114.946 170.406 114.851 170.003 114.848C169.714 114.845 169.417 114.89 169.112 114.982C168.807 115.071 168.556 115.187 168.359 115.328L167.288 115.199L167.861 110.545H172.773V111.561H168.821L168.489 114.349H168.544C168.738 114.196 168.981 114.068 169.274 113.966C169.566 113.865 169.871 113.814 170.188 113.814C170.766 113.814 171.282 113.952 171.734 114.229C172.19 114.503 172.547 114.879 172.805 115.356C173.067 115.833 173.198 116.378 173.198 116.99C173.198 117.593 173.062 118.132 172.791 118.606C172.524 119.077 172.154 119.449 171.683 119.723C171.212 119.994 170.677 120.129 170.077 120.129ZM181.384 120.148C180.793 120.148 180.271 119.998 179.819 119.7C179.366 119.398 179.012 118.974 178.757 118.426C178.501 117.875 178.374 117.224 178.374 116.473C178.374 115.728 178.501 115.082 178.757 114.534C179.012 113.986 179.368 113.563 179.823 113.265C180.279 112.966 180.805 112.817 181.402 112.817C181.864 112.817 182.229 112.894 182.496 113.048C182.767 113.198 182.973 113.371 183.115 113.565C183.26 113.755 183.372 113.912 183.452 114.036H183.544V110.545H184.634V120H183.581V118.911H183.452C183.372 119.04 183.258 119.203 183.11 119.4C182.963 119.594 182.752 119.768 182.478 119.922C182.204 120.072 181.839 120.148 181.384 120.148ZM181.531 119.169C181.968 119.169 182.338 119.055 182.639 118.827C182.941 118.597 183.17 118.278 183.327 117.872C183.484 117.462 183.563 116.99 183.563 116.455C183.563 115.925 183.486 115.462 183.332 115.065C183.178 114.665 182.95 114.354 182.649 114.132C182.347 113.908 181.975 113.795 181.531 113.795C181.07 113.795 180.685 113.914 180.377 114.151C180.073 114.385 179.843 114.703 179.689 115.107C179.539 115.507 179.463 115.956 179.463 116.455C179.463 116.959 179.54 117.418 179.694 117.83C179.851 118.24 180.082 118.566 180.387 118.809C180.694 119.049 181.076 119.169 181.531 119.169ZM188.867 120.166C188.418 120.166 188.01 120.082 187.644 119.912C187.277 119.74 186.987 119.492 186.771 119.169C186.556 118.843 186.448 118.449 186.448 117.987C186.448 117.581 186.528 117.252 186.688 116.999C186.848 116.744 187.062 116.544 187.33 116.399C187.597 116.254 187.893 116.147 188.216 116.076C188.542 116.002 188.87 115.944 189.199 115.901C189.63 115.845 189.98 115.804 190.247 115.776C190.518 115.745 190.715 115.694 190.838 115.624C190.964 115.553 191.028 115.43 191.028 115.254V115.217C191.028 114.762 190.903 114.408 190.654 114.156C190.407 113.903 190.033 113.777 189.532 113.777C189.012 113.777 188.604 113.891 188.308 114.119C188.013 114.346 187.805 114.589 187.685 114.848L186.651 114.479C186.836 114.048 187.082 113.712 187.39 113.472C187.701 113.229 188.039 113.06 188.405 112.964C188.775 112.866 189.138 112.817 189.495 112.817C189.723 112.817 189.984 112.844 190.28 112.9C190.578 112.952 190.866 113.061 191.143 113.228C191.423 113.394 191.655 113.645 191.84 113.98C192.025 114.316 192.117 114.765 192.117 115.328V120H191.028V119.04H190.972C190.898 119.194 190.775 119.358 190.603 119.534C190.43 119.709 190.201 119.858 189.915 119.982C189.629 120.105 189.279 120.166 188.867 120.166ZM189.033 119.188C189.464 119.188 189.827 119.103 190.123 118.934C190.421 118.764 190.646 118.546 190.797 118.278C190.951 118.01 191.028 117.729 191.028 117.433V116.436C190.981 116.491 190.88 116.542 190.723 116.588C190.569 116.632 190.39 116.67 190.187 116.704C189.987 116.735 189.792 116.762 189.601 116.787C189.413 116.808 189.261 116.827 189.144 116.842C188.861 116.879 188.596 116.939 188.35 117.022C188.107 117.102 187.91 117.224 187.759 117.387C187.611 117.547 187.537 117.766 187.537 118.043C187.537 118.421 187.677 118.707 187.958 118.901C188.241 119.092 188.599 119.188 189.033 119.188ZM194.553 122.659C194.369 122.659 194.204 122.644 194.059 122.613C193.915 122.585 193.815 122.558 193.759 122.53L194.036 121.57C194.301 121.637 194.535 121.662 194.738 121.643C194.941 121.625 195.121 121.534 195.278 121.371C195.438 121.211 195.584 120.951 195.717 120.591L195.92 120.037L193.298 112.909H194.479L196.437 118.56H196.511L198.468 112.909H199.65L196.64 121.034C196.505 121.4 196.337 121.703 196.137 121.944C195.937 122.187 195.704 122.367 195.44 122.484C195.178 122.601 194.883 122.659 194.553 122.659ZM206.111 114.497L205.132 114.774C205.07 114.611 204.98 114.453 204.86 114.299C204.743 114.142 204.583 114.012 204.38 113.911C204.176 113.809 203.916 113.759 203.599 113.759C203.165 113.759 202.804 113.859 202.514 114.059C202.228 114.256 202.085 114.506 202.085 114.811C202.085 115.082 202.184 115.296 202.381 115.453C202.578 115.61 202.885 115.741 203.304 115.845L204.356 116.104C204.99 116.258 205.463 116.493 205.774 116.81C206.085 117.124 206.24 117.529 206.24 118.024C206.24 118.43 206.123 118.794 205.889 119.114C205.658 119.434 205.335 119.686 204.92 119.871C204.504 120.055 204.021 120.148 203.47 120.148C202.747 120.148 202.148 119.991 201.674 119.677C201.2 119.363 200.9 118.904 200.774 118.301L201.808 118.043C201.907 118.424 202.093 118.71 202.367 118.901C202.644 119.092 203.005 119.188 203.452 119.188C203.959 119.188 204.363 119.08 204.661 118.864C204.963 118.646 205.114 118.384 205.114 118.08C205.114 117.833 205.027 117.627 204.855 117.461C204.683 117.292 204.418 117.165 204.061 117.082L202.879 116.805C202.23 116.652 201.753 116.413 201.448 116.09C201.146 115.764 200.996 115.356 200.996 114.866C200.996 114.466 201.108 114.112 201.333 113.805C201.56 113.497 201.87 113.255 202.261 113.08C202.655 112.904 203.101 112.817 203.599 112.817C204.301 112.817 204.852 112.971 205.252 113.278C205.655 113.586 205.941 113.992 206.111 114.497ZM213.623 120.166C213.174 120.166 212.766 120.082 212.4 119.912C212.033 119.74 211.742 119.492 211.527 119.169C211.312 118.843 211.204 118.449 211.204 117.987C211.204 117.581 211.284 117.252 211.444 116.999C211.604 116.744 211.818 116.544 212.086 116.399C212.353 116.254 212.649 116.147 212.972 116.076C213.298 116.002 213.626 115.944 213.955 115.901C214.386 115.845 214.735 115.804 215.003 115.776C215.274 115.745 215.471 115.694 215.594 115.624C215.72 115.553 215.783 115.43 215.783 115.254V115.217C215.783 114.762 215.659 114.408 215.409 114.156C215.163 113.903 214.789 113.777 214.288 113.777C213.768 113.777 213.36 113.891 213.064 114.119C212.769 114.346 212.561 114.589 212.441 114.848L211.407 114.479C211.592 114.048 211.838 113.712 212.146 113.472C212.456 113.229 212.795 113.06 213.161 112.964C213.531 112.866 213.894 112.817 214.251 112.817C214.478 112.817 214.74 112.844 215.036 112.9C215.334 112.952 215.622 113.061 215.899 113.228C216.179 113.394 216.411 113.645 216.596 113.98C216.781 114.316 216.873 114.765 216.873 115.328V120H215.783V119.04H215.728C215.654 119.194 215.531 119.358 215.359 119.534C215.186 119.709 214.957 119.858 214.671 119.982C214.385 120.105 214.035 120.166 213.623 120.166ZM213.789 119.188C214.22 119.188 214.583 119.103 214.879 118.934C215.177 118.764 215.402 118.546 215.553 118.278C215.706 118.01 215.783 117.729 215.783 117.433V116.436C215.737 116.491 215.636 116.542 215.479 116.588C215.325 116.632 215.146 116.67 214.943 116.704C214.743 116.735 214.548 116.762 214.357 116.787C214.169 116.808 214.017 116.827 213.9 116.842C213.617 116.879 213.352 116.939 213.106 117.022C212.863 117.102 212.666 117.224 212.515 117.387C212.367 117.547 212.293 117.766 212.293 118.043C212.293 118.421 212.433 118.707 212.713 118.901C212.997 119.092 213.355 119.188 213.789 119.188ZM221.724 122.807C221.197 122.807 220.745 122.739 220.366 122.604C219.988 122.471 219.672 122.296 219.42 122.077C219.171 121.862 218.972 121.631 218.824 121.385L219.692 120.776C219.791 120.905 219.916 121.053 220.066 121.219C220.217 121.388 220.423 121.534 220.685 121.657C220.95 121.783 221.296 121.847 221.724 121.847C222.296 121.847 222.768 121.708 223.141 121.431C223.513 121.154 223.699 120.72 223.699 120.129V118.689H223.607C223.527 118.818 223.413 118.978 223.266 119.169C223.121 119.357 222.912 119.525 222.638 119.672C222.367 119.817 222.001 119.889 221.539 119.889C220.967 119.889 220.453 119.754 219.997 119.483C219.545 119.212 219.186 118.818 218.921 118.301C218.66 117.784 218.529 117.156 218.529 116.418C218.529 115.691 218.657 115.059 218.912 114.52C219.168 113.979 219.523 113.56 219.979 113.265C220.434 112.966 220.96 112.817 221.557 112.817C222.019 112.817 222.385 112.894 222.656 113.048C222.93 113.198 223.139 113.371 223.284 113.565C223.432 113.755 223.546 113.912 223.626 114.036H223.736V112.909H224.789V120.203C224.789 120.812 224.65 121.308 224.373 121.69C224.1 122.074 223.73 122.356 223.266 122.534C222.804 122.716 222.29 122.807 221.724 122.807ZM221.687 118.911C222.124 118.911 222.493 118.81 222.795 118.61C223.096 118.41 223.326 118.123 223.483 117.747C223.639 117.372 223.718 116.922 223.718 116.399C223.718 115.888 223.641 115.437 223.487 115.047C223.333 114.656 223.105 114.349 222.804 114.128C222.502 113.906 222.13 113.795 221.687 113.795C221.225 113.795 220.84 113.912 220.533 114.146C220.228 114.38 219.999 114.694 219.845 115.088C219.694 115.482 219.619 115.919 219.619 116.399C219.619 116.892 219.695 117.327 219.849 117.706C220.006 118.081 220.237 118.377 220.542 118.592C220.85 118.804 221.231 118.911 221.687 118.911ZM229.664 120.148C229.024 120.148 228.462 119.995 227.979 119.691C227.499 119.386 227.123 118.96 226.853 118.412C226.585 117.864 226.451 117.224 226.451 116.491C226.451 115.753 226.585 115.108 226.853 114.557C227.123 114.006 227.499 113.578 227.979 113.274C228.462 112.969 229.024 112.817 229.664 112.817C230.304 112.817 230.864 112.969 231.344 113.274C231.828 113.578 232.203 114.006 232.471 114.557C232.742 115.108 232.877 115.753 232.877 116.491C232.877 117.224 232.742 117.864 232.471 118.412C232.203 118.96 231.828 119.386 231.344 119.691C230.864 119.995 230.304 120.148 229.664 120.148ZM229.664 119.169C230.15 119.169 230.55 119.044 230.864 118.795C231.178 118.546 231.411 118.218 231.561 117.812C231.712 117.406 231.788 116.965 231.788 116.491C231.788 116.018 231.712 115.576 231.561 115.167C231.411 114.757 231.178 114.426 230.864 114.174C230.55 113.922 230.15 113.795 229.664 113.795C229.178 113.795 228.778 113.922 228.464 114.174C228.15 114.426 227.917 114.757 227.767 115.167C227.616 115.576 227.54 116.018 227.54 116.491C227.54 116.965 227.616 117.406 227.767 117.812C227.917 118.218 228.15 118.546 228.464 118.795C228.778 119.044 229.178 119.169 229.664 119.169ZM238.344 120V110.545H239.434V114.036H239.526C239.606 113.912 239.717 113.755 239.858 113.565C240.003 113.371 240.209 113.198 240.477 113.048C240.748 112.894 241.114 112.817 241.576 112.817C242.173 112.817 242.699 112.966 243.154 113.265C243.61 113.563 243.965 113.986 244.221 114.534C244.476 115.082 244.604 115.728 244.604 116.473C244.604 117.224 244.476 117.875 244.221 118.426C243.965 118.974 243.612 119.398 243.159 119.7C242.707 119.998 242.185 120.148 241.594 120.148C241.139 120.148 240.774 120.072 240.5 119.922C240.226 119.768 240.015 119.594 239.868 119.4C239.72 119.203 239.606 119.04 239.526 118.911H239.397V120H238.344ZM239.415 116.455C239.415 116.99 239.494 117.462 239.651 117.872C239.808 118.278 240.037 118.597 240.338 118.827C240.64 119.055 241.009 119.169 241.446 119.169C241.902 119.169 242.282 119.049 242.587 118.809C242.894 118.566 243.125 118.24 243.279 117.83C243.436 117.418 243.515 116.959 243.515 116.455C243.515 115.956 243.438 115.507 243.284 115.107C243.133 114.703 242.904 114.385 242.596 114.151C242.291 113.914 241.908 113.795 241.446 113.795C241.003 113.795 240.631 113.908 240.329 114.132C240.028 114.354 239.8 114.665 239.646 115.065C239.492 115.462 239.415 115.925 239.415 116.455ZM246.718 122.659C246.534 122.659 246.369 122.644 246.224 122.613C246.08 122.585 245.98 122.558 245.924 122.53L246.201 121.57C246.466 121.637 246.7 121.662 246.903 121.643C247.106 121.625 247.286 121.534 247.443 121.371C247.603 121.211 247.749 120.951 247.882 120.591L248.085 120.037L245.463 112.909H246.645L248.602 118.56H248.676L250.633 112.909H251.815L248.805 121.034C248.67 121.4 248.502 121.703 248.302 121.944C248.102 122.187 247.869 122.367 247.605 122.484C247.343 122.601 247.048 122.659 246.718 122.659ZM262.357 122.493C261.415 122.493 260.582 122.364 259.859 122.105C259.136 121.85 258.528 121.473 258.036 120.974C257.543 120.475 257.171 119.865 256.919 119.141C256.666 118.418 256.54 117.59 256.54 116.658C256.54 115.756 256.668 114.95 256.923 114.239C257.182 113.528 257.556 112.924 258.045 112.429C258.537 111.93 259.134 111.55 259.836 111.289C260.541 111.027 261.338 110.896 262.227 110.896C263.092 110.896 263.849 111.038 264.499 111.321C265.151 111.601 265.696 111.981 266.133 112.461C266.573 112.938 266.902 113.475 267.121 114.072C267.343 114.67 267.453 115.285 267.453 115.919C267.453 116.365 267.432 116.818 267.389 117.276C267.346 117.735 267.255 118.156 267.116 118.541C266.978 118.923 266.764 119.231 266.475 119.464C266.188 119.698 265.801 119.815 265.311 119.815C265.096 119.815 264.859 119.781 264.6 119.714C264.342 119.646 264.113 119.534 263.912 119.377C263.712 119.22 263.594 119.009 263.557 118.744H263.502C263.428 118.923 263.314 119.092 263.16 119.252C263.009 119.412 262.811 119.54 262.564 119.635C262.321 119.731 262.024 119.772 261.673 119.76C261.273 119.745 260.921 119.655 260.616 119.492C260.312 119.326 260.056 119.101 259.85 118.818C259.647 118.532 259.493 118.201 259.388 117.826C259.287 117.447 259.236 117.039 259.236 116.602C259.236 116.187 259.298 115.807 259.421 115.462C259.544 115.117 259.715 114.816 259.933 114.557C260.155 114.299 260.413 114.092 260.709 113.939C261.007 113.782 261.329 113.685 261.673 113.648C261.981 113.617 262.261 113.631 262.514 113.689C262.766 113.745 262.974 113.829 263.137 113.943C263.3 114.054 263.403 114.177 263.446 114.312H263.502V113.795H264.48V117.969C264.48 118.227 264.553 118.455 264.697 118.652C264.842 118.849 265.053 118.947 265.33 118.947C265.644 118.947 265.884 118.84 266.05 118.624C266.219 118.409 266.335 118.076 266.396 117.627C266.461 117.178 266.493 116.602 266.493 115.901C266.493 115.488 266.436 115.082 266.322 114.682C266.211 114.279 266.042 113.902 265.814 113.551C265.59 113.2 265.305 112.891 264.96 112.623C264.616 112.355 264.211 112.146 263.746 111.995C263.285 111.841 262.76 111.764 262.172 111.764C261.449 111.764 260.801 111.877 260.229 112.101C259.659 112.323 259.174 112.647 258.774 113.075C258.377 113.5 258.074 114.017 257.865 114.626C257.659 115.233 257.556 115.922 257.556 116.695C257.556 117.479 257.659 118.176 257.865 118.786C258.074 119.395 258.382 119.909 258.788 120.328C259.198 120.746 259.704 121.063 260.307 121.279C260.91 121.497 261.606 121.607 262.394 121.607C262.732 121.607 263.066 121.574 263.395 121.51C263.725 121.445 264.016 121.374 264.268 121.297C264.52 121.22 264.702 121.163 264.813 121.126L265.071 121.976C264.88 122.056 264.631 122.136 264.323 122.216C264.019 122.296 263.692 122.362 263.345 122.414C263 122.467 262.671 122.493 262.357 122.493ZM261.821 118.818C262.234 118.818 262.568 118.735 262.823 118.569C263.078 118.403 263.265 118.152 263.382 117.816C263.499 117.481 263.557 117.058 263.557 116.547C263.557 116.03 263.492 115.627 263.363 115.337C263.234 115.048 263.043 114.845 262.791 114.728C262.538 114.611 262.227 114.553 261.858 114.553C261.507 114.553 261.207 114.645 260.958 114.83C260.712 115.011 260.522 115.254 260.39 115.559C260.261 115.861 260.196 116.19 260.196 116.547C260.196 116.941 260.249 117.312 260.353 117.659C260.458 118.004 260.629 118.284 260.866 118.5C261.103 118.712 261.421 118.818 261.821 118.818ZM271.762 120.148C271.171 120.148 270.649 119.998 270.197 119.7C269.744 119.398 269.39 118.974 269.135 118.426C268.879 117.875 268.752 117.224 268.752 116.473C268.752 115.728 268.879 115.082 269.135 114.534C269.39 113.986 269.746 113.563 270.201 113.265C270.657 112.966 271.183 112.817 271.78 112.817C272.242 112.817 272.606 112.894 272.874 113.048C273.145 113.198 273.351 113.371 273.493 113.565C273.637 113.755 273.75 113.912 273.83 114.036H273.922V110.545H275.012V120H273.959V118.911H273.83C273.75 119.04 273.636 119.203 273.488 119.4C273.34 119.594 273.13 119.768 272.856 119.922C272.582 120.072 272.217 120.148 271.762 120.148ZM271.909 119.169C272.346 119.169 272.716 119.055 273.017 118.827C273.319 118.597 273.548 118.278 273.705 117.872C273.862 117.462 273.941 116.99 273.941 116.455C273.941 115.925 273.864 115.462 273.71 115.065C273.556 114.665 273.328 114.354 273.027 114.132C272.725 113.908 272.353 113.795 271.909 113.795C271.448 113.795 271.063 113.914 270.755 114.151C270.451 114.385 270.221 114.703 270.067 115.107C269.917 115.507 269.841 115.956 269.841 116.455C269.841 116.959 269.918 117.418 270.072 117.83C270.229 118.24 270.46 118.566 270.764 118.809C271.072 119.049 271.454 119.169 271.909 119.169ZM280.464 110.545V120H279.319V111.746H279.263L276.955 113.278V112.115L279.319 110.545H280.464ZM286.377 120.129C285.768 120.129 285.225 120.025 284.748 119.815C284.274 119.606 283.897 119.315 283.617 118.943C283.34 118.567 283.189 118.132 283.164 117.636H284.328C284.352 117.941 284.457 118.204 284.642 118.426C284.826 118.644 285.068 118.814 285.366 118.934C285.665 119.054 285.996 119.114 286.359 119.114C286.765 119.114 287.125 119.043 287.439 118.901C287.753 118.76 287.999 118.563 288.178 118.31C288.356 118.058 288.446 117.766 288.446 117.433C288.446 117.085 288.359 116.779 288.187 116.515C288.015 116.247 287.762 116.038 287.43 115.887C287.098 115.736 286.691 115.661 286.211 115.661H285.454V114.645H286.211C286.587 114.645 286.916 114.577 287.199 114.442C287.485 114.306 287.708 114.116 287.869 113.869C288.032 113.623 288.113 113.334 288.113 113.001C288.113 112.681 288.042 112.403 287.901 112.166C287.759 111.929 287.559 111.744 287.301 111.612C287.045 111.48 286.744 111.413 286.396 111.413C286.07 111.413 285.762 111.473 285.473 111.593C285.186 111.71 284.952 111.881 284.771 112.106C284.589 112.327 284.491 112.595 284.475 112.909H283.367C283.386 112.414 283.535 111.98 283.815 111.607C284.095 111.232 284.462 110.939 284.914 110.73C285.369 110.521 285.87 110.416 286.414 110.416C286.999 110.416 287.501 110.535 287.919 110.772C288.338 111.006 288.659 111.315 288.884 111.7C289.109 112.084 289.221 112.5 289.221 112.946C289.221 113.478 289.081 113.932 288.801 114.308C288.524 114.683 288.147 114.943 287.67 115.088V115.162C288.267 115.26 288.733 115.514 289.069 115.924C289.404 116.33 289.572 116.833 289.572 117.433C289.572 117.947 289.432 118.409 289.152 118.818C288.875 119.224 288.496 119.545 288.016 119.778C287.536 120.012 286.99 120.129 286.377 120.129Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="row-1-cs-count" opacity="0.7" d="M421.641 92V100H420.672V93.0156H420.625L418.672 94.3125V93.3281L420.672 92H421.641ZM426.754 92V100H425.785V93.0156H425.738L423.785 94.3125V93.3281L425.785 92H426.754Z" fill="var(--vscode-quickInput-foreground)"/>
<g id="row-1-cs-icon-clip" clip-path="url(#clip0_46_2)">
<path id="row-1-cs-icon" opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M411.468 87.5557L411.947 88.0882V91.5942L410.988 90.6414V88.5675H399.006V96.5559H401.456L401.988 97.0884V98.8459L404.119 96.7157L404.491 96.5559H405.033L406.035 97.5677H404.704L401.829 100.444L400.976 100.071V97.5677H398.473L397.994 97.0884V88.0882L398.473 87.5557H411.468ZM408.079 91.5498L408.797 92.3235L406.089 95.0314L408.797 97.7946L408.079 98.5131L404.984 95.4183V94.6999L408.079 91.5498ZM414.006 94.6999L410.911 91.5498L410.137 92.3235L412.901 95.0314L410.137 97.7946L410.911 98.5131L414.006 95.4183V94.6999Z" fill="var(--vscode-quickInput-foreground)"/>
</g>
<path id="row-1-repo" opacity="0.7" d="M188.266 102.375C187.82 102.375 187.438 102.318 187.117 102.203C186.797 102.091 186.53 101.943 186.316 101.758C186.105 101.576 185.938 101.38 185.813 101.172L186.547 100.656C186.63 100.766 186.736 100.891 186.863 101.031C186.991 101.174 187.165 101.298 187.387 101.402C187.611 101.509 187.904 101.562 188.266 101.562C188.75 101.562 189.15 101.445 189.465 101.211C189.78 100.977 189.938 100.609 189.938 100.109V98.8906H189.859C189.792 99 189.695 99.1354 189.57 99.2969C189.448 99.4557 189.271 99.5977 189.039 99.7227C188.81 99.8451 188.5 99.9062 188.109 99.9062C187.625 99.9062 187.19 99.7917 186.805 99.5625C186.422 99.3333 186.118 99 185.895 98.5625C185.673 98.125 185.563 97.5937 185.563 96.9687C185.563 96.3542 185.671 95.819 185.887 95.3633C186.103 94.9049 186.404 94.5508 186.789 94.3008C187.174 94.0482 187.62 93.9219 188.125 93.9219C188.516 93.9219 188.826 93.987 189.055 94.1172C189.286 94.2448 189.464 94.3906 189.586 94.5547C189.711 94.7161 189.807 94.849 189.875 94.9531H189.969V94H190.859V100.172C190.859 100.688 190.742 101.107 190.508 101.43C190.276 101.755 189.964 101.993 189.57 102.145C189.18 102.298 188.745 102.375 188.266 102.375ZM188.234 99.0781C188.604 99.0781 188.917 98.9935 189.172 98.8242C189.427 98.6549 189.621 98.4115 189.754 98.0938C189.887 97.776 189.953 97.3958 189.953 96.9531C189.953 96.5208 189.888 96.1393 189.758 95.8086C189.628 95.4779 189.435 95.2187 189.18 95.0312C188.924 94.8437 188.609 94.75 188.234 94.75C187.844 94.75 187.518 94.849 187.258 95.0469C187 95.2448 186.806 95.5104 186.676 95.8438C186.548 96.1771 186.484 96.5469 186.484 96.9531C186.484 97.3698 186.549 97.7383 186.68 98.0586C186.813 98.3763 187.008 98.6263 187.266 98.8086C187.526 98.9883 187.849 99.0781 188.234 99.0781ZM192.547 100V94H193.469V100H192.547ZM193.016 93C192.836 93 192.681 92.9388 192.551 92.8164C192.423 92.694 192.359 92.5469 192.359 92.375C192.359 92.2031 192.423 92.056 192.551 91.9336C192.681 91.8112 192.836 91.75 193.016 91.75C193.195 91.75 193.349 91.8112 193.477 91.9336C193.607 92.056 193.672 92.2031 193.672 92.375C193.672 92.5469 193.607 92.694 193.477 92.8164C193.349 92.9388 193.195 93 193.016 93ZM197.767 94V94.7812H194.657V94H197.767ZM195.563 92.5625H196.485V98.2812C196.485 98.5417 196.523 98.737 196.599 98.8672C196.677 98.9948 196.776 99.0807 196.896 99.125C197.018 99.1667 197.147 99.1875 197.282 99.1875C197.384 99.1875 197.467 99.1823 197.532 99.1719C197.597 99.1589 197.649 99.1484 197.688 99.1406L197.876 99.9687C197.813 99.9922 197.726 100.016 197.614 100.039C197.502 100.065 197.36 100.078 197.188 100.078C196.928 100.078 196.673 100.022 196.423 99.9102C196.175 99.7982 195.97 99.6276 195.806 99.3984C195.644 99.1693 195.563 98.8802 195.563 98.5312V92.5625ZM200.142 97.8125L200.126 96.6719H200.313L202.938 94H204.079L201.282 96.8281H201.204L200.142 97.8125ZM199.282 100V92H200.204V100H199.282ZM203.095 100L200.751 97.0312L201.407 96.3906L204.267 100H203.095ZM205.266 100V94H206.156V94.9062H206.219C206.328 94.6094 206.526 94.3685 206.813 94.1836C207.099 93.9987 207.422 93.9062 207.781 93.9062C207.849 93.9062 207.934 93.9076 208.035 93.9102C208.137 93.9128 208.214 93.9167 208.266 93.9219V94.8594C208.234 94.8516 208.163 94.8398 208.051 94.8242C207.941 94.806 207.826 94.7969 207.703 94.7969C207.411 94.7969 207.151 94.8581 206.922 94.9805C206.695 95.1003 206.516 95.2669 206.383 95.4805C206.253 95.6914 206.188 95.9323 206.188 96.2031V100H205.266ZM211.124 100.141C210.744 100.141 210.399 100.069 210.089 99.9258C209.779 99.7799 209.533 99.5703 209.351 99.2969C209.168 99.0208 209.077 98.6875 209.077 98.2969C209.077 97.9531 209.145 97.6745 209.28 97.4609C209.416 97.2448 209.597 97.0755 209.823 96.9531C210.05 96.8307 210.3 96.7396 210.573 96.6797C210.849 96.6172 211.127 96.5677 211.405 96.5313C211.77 96.4844 212.065 96.4492 212.292 96.4258C212.521 96.3997 212.688 96.3568 212.792 96.2969C212.899 96.237 212.952 96.1328 212.952 95.9844V95.9531C212.952 95.5677 212.847 95.2682 212.636 95.0547C212.427 94.8411 212.111 94.7344 211.687 94.7344C211.246 94.7344 210.901 94.8307 210.651 95.0234C210.401 95.2161 210.226 95.4219 210.124 95.6406L209.249 95.3281C209.405 94.9635 209.614 94.6797 209.874 94.4766C210.137 94.2708 210.424 94.1276 210.733 94.0469C211.046 93.9635 211.353 93.9219 211.655 93.9219C211.848 93.9219 212.069 93.9453 212.319 93.9922C212.572 94.0365 212.815 94.1289 213.05 94.2695C213.287 94.4102 213.483 94.6224 213.64 94.9062C213.796 95.1901 213.874 95.5703 213.874 96.0469V100H212.952V99.1875H212.905C212.843 99.3177 212.739 99.457 212.593 99.6055C212.447 99.7539 212.253 99.8802 212.011 99.9844C211.769 100.089 211.473 100.141 211.124 100.141ZM211.265 99.3125C211.629 99.3125 211.937 99.2409 212.187 99.0977C212.439 98.9544 212.629 98.7695 212.757 98.543C212.887 98.3164 212.952 98.0781 212.952 97.8281V96.9844C212.913 97.0312 212.827 97.0742 212.694 97.1133C212.564 97.1497 212.413 97.1823 212.241 97.2109C212.072 97.237 211.907 97.2604 211.745 97.2812C211.586 97.2995 211.457 97.3151 211.358 97.3281C211.119 97.3594 210.895 97.4102 210.687 97.4805C210.481 97.5482 210.314 97.651 210.187 97.7891C210.062 97.9245 209.999 98.1094 209.999 98.3437C209.999 98.6641 210.118 98.9062 210.354 99.0703C210.594 99.2318 210.897 99.3125 211.265 99.3125ZM216.416 97.8125L216.4 96.6719H216.588L219.213 94H220.354L217.557 96.8281H217.479L216.416 97.8125ZM215.557 100V92H216.479V100H215.557ZM219.369 100L217.025 97.0312L217.682 96.3906L220.541 100H219.369ZM223.809 100.125C223.23 100.125 222.732 99.9974 222.312 99.7422C221.896 99.4844 221.574 99.125 221.348 98.6641C221.124 98.2005 221.012 97.6615 221.012 97.0469C221.012 96.4323 221.124 95.8906 221.348 95.4219C221.574 94.9505 221.889 94.5833 222.293 94.3203C222.699 94.0547 223.173 93.9219 223.715 93.9219C224.027 93.9219 224.336 93.974 224.641 94.0781C224.945 94.1823 225.223 94.3516 225.473 94.5859C225.723 94.8177 225.922 95.125 226.07 95.5078C226.219 95.8906 226.293 96.362 226.293 96.9219V97.3125H221.668V96.5156H225.355C225.355 96.1771 225.288 95.875 225.152 95.6094C225.02 95.3437 224.829 95.1341 224.582 94.9805C224.337 94.8268 224.048 94.75 223.715 94.75C223.348 94.75 223.03 94.8411 222.762 95.0234C222.496 95.2031 222.292 95.4375 222.148 95.7266C222.005 96.0156 221.934 96.3255 221.934 96.6562V97.1875C221.934 97.6406 222.012 98.0247 222.168 98.3398C222.327 98.6523 222.547 98.8906 222.828 99.0547C223.109 99.2161 223.436 99.2969 223.809 99.2969C224.051 99.2969 224.27 99.263 224.465 99.1953C224.663 99.125 224.833 99.0208 224.977 98.8828C225.12 98.7422 225.23 98.5677 225.309 98.3594L226.199 98.6094C226.105 98.9115 225.948 99.1771 225.727 99.4062C225.505 99.6328 225.232 99.8099 224.906 99.9375C224.581 100.063 224.215 100.125 223.809 100.125ZM228.617 96.3906V100H227.695V94H228.586V94.9375H228.664C228.805 94.6328 229.018 94.388 229.305 94.2031C229.591 94.0156 229.961 93.9219 230.414 93.9219C230.82 93.9219 231.176 94.0052 231.48 94.1719C231.785 94.3359 232.022 94.5859 232.191 94.9219C232.361 95.2552 232.445 95.6771 232.445 96.1875V100H231.523V96.25C231.523 95.7786 231.401 95.4115 231.156 95.1484C230.911 94.8828 230.576 94.75 230.148 94.75C229.854 94.75 229.591 94.8138 229.359 94.9414C229.13 95.069 228.949 95.2552 228.816 95.5C228.684 95.7448 228.617 96.0417 228.617 96.3906ZM236.958 91.625L234.38 101.203H233.536L236.114 91.625H236.958ZM242.301 95.3437L241.473 95.5781C241.421 95.4401 241.344 95.306 241.242 95.1758C241.143 95.043 241.008 94.9336 240.836 94.8477C240.664 94.7617 240.444 94.7187 240.176 94.7187C239.809 94.7187 239.503 94.8034 239.258 94.9727C239.016 95.1393 238.895 95.3516 238.895 95.6094C238.895 95.8385 238.978 96.0195 239.145 96.1523C239.311 96.2852 239.572 96.3958 239.926 96.4844L240.816 96.7031C241.353 96.8333 241.753 97.0326 242.016 97.3008C242.279 97.5664 242.41 97.9089 242.41 98.3281C242.41 98.6719 242.311 98.9792 242.113 99.25C241.918 99.5208 241.645 99.7344 241.293 99.8906C240.941 100.047 240.533 100.125 240.066 100.125C239.454 100.125 238.948 99.9922 238.547 99.7266C238.146 99.4609 237.892 99.0729 237.785 98.5625L238.66 98.3437C238.743 98.6667 238.901 98.9089 239.133 99.0703C239.367 99.2318 239.673 99.3125 240.051 99.3125C240.48 99.3125 240.822 99.2214 241.074 99.0391C241.329 98.8542 241.457 98.6328 241.457 98.375C241.457 98.1667 241.384 97.9922 241.238 97.8516C241.092 97.7083 240.868 97.6016 240.566 97.5312L239.566 97.2969C239.017 97.1667 238.613 96.9648 238.355 96.6914C238.1 96.4154 237.973 96.0703 237.973 95.6562C237.973 95.3177 238.068 95.0182 238.258 94.7578C238.451 94.4974 238.712 94.293 239.043 94.1445C239.376 93.9961 239.754 93.9219 240.176 93.9219C240.77 93.9219 241.236 94.0521 241.574 94.3125C241.915 94.5729 242.158 94.9167 242.301 95.3437ZM244.72 96.3906V100H243.798V92H244.72V94.9375H244.798C244.938 94.6276 245.149 94.3815 245.431 94.1992C245.715 94.0143 246.092 93.9219 246.563 93.9219C246.972 93.9219 247.33 94.0039 247.638 94.168C247.945 94.3294 248.183 94.5781 248.353 94.9141C248.524 95.2474 248.61 95.6719 248.61 96.1875V100H247.688V96.25C247.688 95.7734 247.565 95.4049 247.317 95.1445C247.073 94.8815 246.733 94.75 246.298 94.75C245.996 94.75 245.725 94.8138 245.485 94.9414C245.248 95.069 245.061 95.2552 244.923 95.5C244.787 95.7448 244.72 96.0417 244.72 96.3906ZM252.063 100.141C251.682 100.141 251.337 100.069 251.027 99.9258C250.717 99.7799 250.471 99.5703 250.289 99.2969C250.107 99.0208 250.016 98.6875 250.016 98.2969C250.016 97.9531 250.083 97.6745 250.219 97.4609C250.354 97.2448 250.535 97.0755 250.762 96.9531C250.988 96.8307 251.238 96.7396 251.512 96.6797C251.788 96.6172 252.065 96.5677 252.344 96.5313C252.708 96.4844 253.004 96.4492 253.23 96.4258C253.46 96.3997 253.626 96.3568 253.73 96.2969C253.837 96.237 253.891 96.1328 253.891 95.9844V95.9531C253.891 95.5677 253.785 95.2682 253.574 95.0547C253.366 94.8411 253.049 94.7344 252.625 94.7344C252.185 94.7344 251.84 94.8307 251.59 95.0234C251.34 95.2161 251.164 95.4219 251.063 95.6406L250.188 95.3281C250.344 94.9635 250.552 94.6797 250.813 94.4766C251.076 94.2708 251.362 94.1276 251.672 94.0469C251.984 93.9635 252.292 93.9219 252.594 93.9219C252.786 93.9219 253.008 93.9453 253.258 93.9922C253.51 94.0365 253.754 94.1289 253.988 94.2695C254.225 94.4102 254.422 94.6224 254.578 94.9062C254.734 95.1901 254.813 95.5703 254.813 96.0469V100H253.891V99.1875H253.844C253.781 99.3177 253.677 99.457 253.531 99.6055C253.385 99.7539 253.191 99.8802 252.949 99.9844C252.707 100.089 252.411 100.141 252.063 100.141ZM252.203 99.3125C252.568 99.3125 252.875 99.2409 253.125 99.0977C253.378 98.9544 253.568 98.7695 253.695 98.543C253.826 98.3164 253.891 98.0781 253.891 97.8281V96.9844C253.852 97.0312 253.766 97.0742 253.633 97.1133C253.503 97.1497 253.352 97.1823 253.18 97.2109C253.01 97.237 252.845 97.2604 252.684 97.2812C252.525 97.2995 252.396 97.3151 252.297 97.3281C252.057 97.3594 251.833 97.4102 251.625 97.4805C251.419 97.5482 251.253 97.651 251.125 97.7891C251 97.9245 250.938 98.1094 250.938 98.3437C250.938 98.6641 251.056 98.9062 251.293 99.0703C251.533 99.2318 251.836 99.3125 252.203 99.3125ZM256.495 100V94H257.386V94.9062H257.448C257.558 94.6094 257.756 94.3685 258.042 94.1836C258.328 93.9987 258.651 93.9062 259.011 93.9062C259.078 93.9062 259.163 93.9076 259.265 93.9102C259.366 93.9128 259.443 93.9167 259.495 93.9219V94.8594C259.464 94.8516 259.392 94.8398 259.28 94.8242C259.171 94.806 259.055 94.7969 258.933 94.7969C258.641 94.7969 258.381 94.8581 258.151 94.9805C257.925 95.1003 257.745 95.2669 257.612 95.4805C257.482 95.6914 257.417 95.9323 257.417 96.2031V100H256.495ZM262.921 100.125C262.343 100.125 261.844 99.9974 261.425 99.7422C261.008 99.4844 260.687 99.125 260.46 98.6641C260.236 98.2005 260.124 97.6615 260.124 97.0469C260.124 96.4323 260.236 95.8906 260.46 95.4219C260.687 94.9505 261.002 94.5833 261.405 94.3203C261.812 94.0547 262.285 93.9219 262.827 93.9219C263.14 93.9219 263.448 93.974 263.753 94.0781C264.058 94.1823 264.335 94.3516 264.585 94.5859C264.835 94.8177 265.034 95.125 265.183 95.5078C265.331 95.8906 265.405 96.362 265.405 96.9219V97.3125H260.78V96.5156H264.468C264.468 96.1771 264.4 95.875 264.265 95.6094C264.132 95.3437 263.942 95.1341 263.694 94.9805C263.45 94.8268 263.16 94.75 262.827 94.75C262.46 94.75 262.142 94.8411 261.874 95.0234C261.608 95.2031 261.404 95.4375 261.261 95.7266C261.118 96.0156 261.046 96.3255 261.046 96.6562V97.1875C261.046 97.6406 261.124 98.0247 261.28 98.3398C261.439 98.6523 261.659 98.8906 261.94 99.0547C262.222 99.2161 262.549 99.2969 262.921 99.2969C263.163 99.2969 263.382 99.263 263.577 99.1953C263.775 99.125 263.946 99.0208 264.089 98.8828C264.232 98.7422 264.343 98.5677 264.421 98.3594L265.312 98.6094C265.218 98.9115 265.06 99.1771 264.839 99.4062C264.618 99.6328 264.344 99.8099 264.019 99.9375C263.693 100.063 263.327 100.125 262.921 100.125ZM269.073 100.125C268.573 100.125 268.132 99.9987 267.749 99.7461C267.366 99.4909 267.067 99.1315 266.851 98.668C266.634 98.2018 266.526 97.651 266.526 97.0156C266.526 96.3854 266.634 95.8385 266.851 95.375C267.067 94.9115 267.368 94.5534 267.753 94.3008C268.138 94.0482 268.584 93.9219 269.089 93.9219C269.479 93.9219 269.788 93.987 270.015 94.1172C270.244 94.2448 270.418 94.3906 270.538 94.5547C270.66 94.7161 270.756 94.849 270.823 94.9531H270.901V92H271.823V100H270.933V99.0781H270.823C270.756 99.1875 270.659 99.3255 270.534 99.4922C270.409 99.6562 270.231 99.8034 269.999 99.9336C269.767 100.061 269.459 100.125 269.073 100.125ZM269.198 99.2969C269.568 99.2969 269.881 99.2005 270.136 99.0078C270.391 98.8125 270.585 98.543 270.718 98.1992C270.851 97.8529 270.917 97.4531 270.917 97C270.917 96.5521 270.852 96.1602 270.722 95.8242C270.591 95.4857 270.399 95.2227 270.144 95.0352C269.888 94.8451 269.573 94.75 269.198 94.75C268.808 94.75 268.482 94.8503 268.222 95.0508C267.964 95.2487 267.77 95.5182 267.64 95.8594C267.512 96.1979 267.448 96.5781 267.448 97C267.448 97.4271 267.513 97.8151 267.644 98.1641C267.776 98.5104 267.972 98.7865 268.229 98.9922C268.49 99.1953 268.813 99.2969 269.198 99.2969ZM277.077 96.1406V97H273.577V96.1406H277.077ZM280.059 100L278.23 94H279.199L280.496 98.5938H280.559L281.84 94H282.824L284.09 98.5781H284.152L285.449 94H286.418L284.59 100H283.684L282.371 95.3906H282.277L280.965 100H280.059ZM289.948 100.125C289.37 100.125 288.871 99.9974 288.452 99.7422C288.035 99.4844 287.714 99.125 287.487 98.6641C287.263 98.2005 287.151 97.6615 287.151 97.0469C287.151 96.4323 287.263 95.8906 287.487 95.4219C287.714 94.9505 288.029 94.5833 288.433 94.3203C288.839 94.0547 289.313 93.9219 289.854 93.9219C290.167 93.9219 290.476 93.974 290.78 94.0781C291.085 94.1823 291.362 94.3516 291.612 94.5859C291.862 94.8177 292.062 95.125 292.21 95.5078C292.358 95.8906 292.433 96.362 292.433 96.9219V97.3125H287.808V96.5156H291.495C291.495 96.1771 291.427 95.875 291.292 95.6094C291.159 95.3437 290.969 95.1341 290.722 94.9805C290.477 94.8268 290.188 94.75 289.854 94.75C289.487 94.75 289.17 94.8411 288.901 95.0234C288.636 95.2031 288.431 95.4375 288.288 95.7266C288.145 96.0156 288.073 96.3255 288.073 96.6562V97.1875C288.073 97.6406 288.151 98.0247 288.308 98.3398C288.466 98.6523 288.687 98.8906 288.968 99.0547C289.249 99.2161 289.576 99.2969 289.948 99.2969C290.19 99.2969 290.409 99.263 290.604 99.1953C290.802 99.125 290.973 99.0208 291.116 98.8828C291.259 98.7422 291.37 98.5677 291.448 98.3594L292.339 98.6094C292.245 98.9115 292.088 99.1771 291.866 99.4062C291.645 99.6328 291.371 99.8099 291.046 99.9375C290.72 100.063 290.354 100.125 289.948 100.125ZM293.96 100V92H294.882V94.9531H294.96C295.028 94.849 295.121 94.7161 295.241 94.5547C295.364 94.3906 295.538 94.2448 295.765 94.1172C295.994 93.987 296.304 93.9219 296.694 93.9219C297.2 93.9219 297.645 94.0482 298.03 94.3008C298.416 94.5534 298.716 94.9115 298.933 95.375C299.149 95.8385 299.257 96.3854 299.257 97.0156C299.257 97.651 299.149 98.2018 298.933 98.668C298.716 99.1315 298.417 99.4909 298.034 99.7461C297.651 99.9987 297.21 100.125 296.71 100.125C296.325 100.125 296.016 100.061 295.784 99.9336C295.552 99.8034 295.374 99.6562 295.249 99.4922C295.124 99.3255 295.028 99.1875 294.96 99.0781H294.851V100H293.96ZM294.866 97C294.866 97.4531 294.933 97.8529 295.065 98.1992C295.198 98.543 295.392 98.8125 295.647 99.0078C295.903 99.2005 296.215 99.2969 296.585 99.2969C296.97 99.2969 297.292 99.1953 297.55 98.9922C297.81 98.7865 298.006 98.5104 298.136 98.1641C298.269 97.8151 298.335 97.4271 298.335 97C298.335 96.5781 298.27 96.1979 298.14 95.8594C298.012 95.5182 297.818 95.2487 297.558 95.0508C297.3 94.8503 296.976 94.75 296.585 94.75C296.21 94.75 295.895 94.8451 295.64 95.0352C295.384 95.2227 295.192 95.4857 295.062 95.8242C294.931 96.1602 294.866 96.5521 294.866 97ZM304.104 96.1406V97H300.604V96.1406H304.104ZM308.164 100.125C307.602 100.125 307.117 99.9922 306.711 99.7266C306.305 99.4609 305.992 99.0951 305.773 98.6289C305.555 98.1628 305.445 97.6302 305.445 97.0312C305.445 96.4219 305.557 95.8841 305.781 95.418C306.008 94.9492 306.323 94.5833 306.727 94.3203C307.133 94.0547 307.607 93.9219 308.148 93.9219C308.57 93.9219 308.951 94 309.289 94.1562C309.628 94.3125 309.905 94.5312 310.121 94.8125C310.337 95.0937 310.471 95.4219 310.523 95.7969H309.602C309.531 95.5234 309.375 95.2812 309.133 95.0703C308.893 94.8568 308.57 94.75 308.164 94.75C307.805 94.75 307.49 94.8437 307.219 95.0312C306.951 95.2161 306.741 95.4779 306.59 95.8164C306.441 96.1523 306.367 96.5469 306.367 97C306.367 97.4635 306.44 97.8672 306.586 98.2109C306.734 98.5547 306.943 98.8216 307.211 99.0117C307.482 99.2018 307.799 99.2969 308.164 99.2969C308.404 99.2969 308.621 99.2552 308.816 99.1719C309.012 99.0885 309.177 98.9688 309.313 98.8125C309.448 98.6562 309.544 98.4687 309.602 98.25H310.523C310.471 98.6042 310.342 98.9232 310.137 99.207C309.934 99.4883 309.664 99.7122 309.328 99.8789C308.995 100.043 308.607 100.125 308.164 100.125ZM314.309 100.125C313.767 100.125 313.292 99.9961 312.883 99.7383C312.477 99.4805 312.159 99.1198 311.93 98.6562C311.703 98.1927 311.59 97.651 311.59 97.0312C311.59 96.4062 311.703 95.8607 311.93 95.3945C312.159 94.9284 312.477 94.5664 312.883 94.3086C313.292 94.0508 313.767 93.9219 314.309 93.9219C314.85 93.9219 315.324 94.0508 315.73 94.3086C316.139 94.5664 316.457 94.9284 316.684 95.3945C316.913 95.8607 317.027 96.4062 317.027 97.0312C317.027 97.651 316.913 98.1927 316.684 98.6562C316.457 99.1198 316.139 99.4805 315.73 99.7383C315.324 99.9961 314.85 100.125 314.309 100.125ZM314.309 99.2969C314.72 99.2969 315.059 99.1914 315.324 98.9805C315.59 98.7695 315.786 98.4922 315.914 98.1484C316.042 97.8047 316.105 97.4323 316.105 97.0312C316.105 96.6302 316.042 96.2565 315.914 95.9102C315.786 95.5638 315.59 95.2839 315.324 95.0703C315.059 94.8568 314.72 94.75 314.309 94.75C313.897 94.75 313.559 94.8568 313.293 95.0703C313.027 95.2839 312.831 95.5638 312.703 95.9102C312.576 96.2565 312.512 96.6302 312.512 97.0312C312.512 97.4323 312.576 97.8047 312.703 98.1484C312.831 98.4922 313.027 98.7695 313.293 98.9805C313.559 99.1914 313.897 99.2969 314.309 99.2969ZM318.435 100V94H319.325V94.9375H319.403C319.528 94.6172 319.73 94.3685 320.009 94.1914C320.287 94.0117 320.622 93.9219 321.013 93.9219C321.409 93.9219 321.738 94.0117 322.001 94.1914C322.267 94.3685 322.474 94.6172 322.622 94.9375H322.685C322.838 94.6276 323.069 94.3815 323.376 94.1992C323.683 94.0143 324.052 93.9219 324.481 93.9219C325.018 93.9219 325.457 94.0898 325.798 94.4258C326.139 94.7591 326.31 95.2786 326.31 95.9844V100H325.388V95.9844C325.388 95.5417 325.267 95.2253 325.024 95.0352C324.782 94.8451 324.497 94.75 324.169 94.75C323.747 94.75 323.42 94.8776 323.188 95.1328C322.957 95.3854 322.841 95.7057 322.841 96.0937V100H321.903V95.8906C321.903 95.5495 321.793 95.2747 321.571 95.0664C321.35 94.8555 321.065 94.75 320.716 94.75C320.476 94.75 320.252 94.8138 320.044 94.9414C319.838 95.069 319.672 95.2461 319.544 95.4727C319.419 95.6966 319.356 95.9557 319.356 96.25V100H318.435ZM327.995 102.25V94H328.886V94.9531H328.995C329.063 94.849 329.157 94.7161 329.276 94.5547C329.399 94.3906 329.573 94.2448 329.8 94.1172C330.029 93.987 330.339 93.9219 330.729 93.9219C331.235 93.9219 331.68 94.0482 332.065 94.3008C332.451 94.5534 332.752 94.9115 332.968 95.375C333.184 95.8385 333.292 96.3854 333.292 97.0156C333.292 97.651 333.184 98.2018 332.968 98.668C332.752 99.1315 332.452 99.4909 332.069 99.7461C331.687 99.9987 331.245 100.125 330.745 100.125C330.36 100.125 330.051 100.061 329.819 99.9336C329.588 99.8034 329.409 99.6562 329.284 99.4922C329.159 99.3255 329.063 99.1875 328.995 99.0781H328.917V102.25H327.995ZM328.901 97C328.901 97.4531 328.968 97.8529 329.101 98.1992C329.233 98.543 329.427 98.8125 329.683 99.0078C329.938 99.2005 330.25 99.2969 330.62 99.2969C331.006 99.2969 331.327 99.1953 331.585 98.9922C331.845 98.7865 332.041 98.5104 332.171 98.1641C332.304 97.8151 332.37 97.4271 332.37 97C332.37 96.5781 332.305 96.1979 332.175 95.8594C332.047 95.5182 331.853 95.2487 331.593 95.0508C331.335 94.8503 331.011 94.75 330.62 94.75C330.245 94.75 329.93 94.8451 329.675 95.0352C329.42 95.2227 329.227 95.4857 329.097 95.8242C328.966 96.1602 328.901 96.5521 328.901 97ZM337.136 100.125C336.594 100.125 336.119 99.9961 335.71 99.7383C335.304 99.4805 334.986 99.1198 334.757 98.6562C334.53 98.1927 334.417 97.651 334.417 97.0312C334.417 96.4062 334.53 95.8607 334.757 95.3945C334.986 94.9284 335.304 94.5664 335.71 94.3086C336.119 94.0508 336.594 93.9219 337.136 93.9219C337.677 93.9219 338.151 94.0508 338.558 94.3086C338.966 94.5664 339.284 94.9284 339.511 95.3945C339.74 95.8607 339.854 96.4062 339.854 97.0312C339.854 97.651 339.74 98.1927 339.511 98.6562C339.284 99.1198 338.966 99.4805 338.558 99.7383C338.151 99.9961 337.677 100.125 337.136 100.125ZM337.136 99.2969C337.547 99.2969 337.886 99.1914 338.151 98.9805C338.417 98.7695 338.614 98.4922 338.741 98.1484C338.869 97.8047 338.933 97.4323 338.933 97.0312C338.933 96.6302 338.869 96.2565 338.741 95.9102C338.614 95.5638 338.417 95.2839 338.151 95.0703C337.886 94.8568 337.547 94.75 337.136 94.75C336.724 94.75 336.386 94.8568 336.12 95.0703C335.854 95.2839 335.658 95.5638 335.53 95.9102C335.403 96.2565 335.339 96.6302 335.339 97.0312C335.339 97.4323 335.403 97.8047 335.53 98.1484C335.658 98.4922 335.854 98.7695 336.12 98.9805C336.386 99.1914 336.724 99.2969 337.136 99.2969ZM342.184 96.3906V100H341.262V94H342.152V94.9375H342.23C342.371 94.6328 342.585 94.388 342.871 94.2031C343.158 94.0156 343.527 93.9219 343.98 93.9219C344.387 93.9219 344.742 94.0052 345.047 94.1719C345.352 94.3359 345.589 94.5859 345.758 94.9219C345.927 95.2552 346.012 95.6771 346.012 96.1875V100H345.09V96.25C345.09 95.7786 344.967 95.4115 344.723 95.1484C344.478 94.8828 344.142 94.75 343.715 94.75C343.421 94.75 343.158 94.8138 342.926 94.9414C342.697 95.069 342.516 95.2552 342.383 95.5C342.25 95.7448 342.184 96.0417 342.184 96.3906ZM350.212 100.125C349.634 100.125 349.135 99.9974 348.716 99.7422C348.299 99.4844 347.978 99.125 347.751 98.6641C347.527 98.2005 347.415 97.6615 347.415 97.0469C347.415 96.4323 347.527 95.8906 347.751 95.4219C347.978 94.9505 348.293 94.5833 348.696 94.3203C349.103 94.0547 349.576 93.9219 350.118 93.9219C350.431 93.9219 350.739 93.974 351.044 94.0781C351.349 94.1823 351.626 94.3516 351.876 94.5859C352.126 94.8177 352.325 95.125 352.474 95.5078C352.622 95.8906 352.696 96.362 352.696 96.9219V97.3125H348.071V96.5156H351.759C351.759 96.1771 351.691 95.875 351.556 95.6094C351.423 95.3437 351.233 95.1341 350.985 94.9805C350.741 94.8268 350.451 94.75 350.118 94.75C349.751 94.75 349.433 94.8411 349.165 95.0234C348.899 95.2031 348.695 95.4375 348.552 95.7266C348.409 96.0156 348.337 96.3255 348.337 96.6562V97.1875C348.337 97.6406 348.415 98.0247 348.571 98.3398C348.73 98.6523 348.95 98.8906 349.231 99.0547C349.513 99.2161 349.84 99.2969 350.212 99.2969C350.454 99.2969 350.673 99.263 350.868 99.1953C351.066 99.125 351.237 99.0208 351.38 98.8828C351.523 98.7422 351.634 98.5677 351.712 98.3594L352.603 98.6094C352.509 98.9115 352.351 99.1771 352.13 99.4062C351.909 99.6328 351.635 99.8099 351.31 99.9375C350.984 100.063 350.618 100.125 350.212 100.125ZM355.021 96.3906V100H354.099V94H354.989V94.9375H355.067C355.208 94.6328 355.422 94.388 355.708 94.2031C355.994 94.0156 356.364 93.9219 356.817 93.9219C357.224 93.9219 357.579 94.0052 357.884 94.1719C358.188 94.3359 358.425 94.5859 358.595 94.9219C358.764 95.2552 358.849 95.6771 358.849 96.1875V100H357.927V96.25C357.927 95.7786 357.804 95.4115 357.56 95.1484C357.315 94.8828 356.979 94.75 356.552 94.75C356.257 94.75 355.994 94.8138 355.763 94.9414C355.534 95.069 355.353 95.2552 355.22 95.5C355.087 95.7448 355.021 96.0417 355.021 96.3906ZM363.143 94V94.7812H360.033V94H363.143ZM360.939 92.5625H361.861V98.2812C361.861 98.5417 361.899 98.737 361.975 98.8672C362.053 98.9948 362.152 99.0807 362.271 99.125C362.394 99.1667 362.523 99.1875 362.658 99.1875C362.76 99.1875 362.843 99.1823 362.908 99.1719C362.973 99.1589 363.025 99.1484 363.064 99.1406L363.252 99.9687C363.189 99.9922 363.102 100.016 362.99 100.039C362.878 100.065 362.736 100.078 362.564 100.078C362.304 100.078 362.049 100.022 361.799 99.9102C361.551 99.7982 361.346 99.6276 361.182 99.3984C361.02 99.1693 360.939 98.8802 360.939 98.5312V92.5625ZM368.672 95.3437L367.844 95.5781C367.792 95.4401 367.715 95.306 367.613 95.1758C367.514 95.043 367.379 94.9336 367.207 94.8477C367.035 94.7617 366.815 94.7187 366.547 94.7187C366.18 94.7187 365.874 94.8034 365.629 94.9727C365.387 95.1393 365.266 95.3516 365.266 95.6094C365.266 95.8385 365.349 96.0195 365.516 96.1523C365.682 96.2852 365.943 96.3958 366.297 96.4844L367.188 96.7031C367.724 96.8333 368.124 97.0326 368.387 97.3008C368.65 97.5664 368.781 97.9089 368.781 98.3281C368.781 98.6719 368.682 98.9792 368.484 99.25C368.289 99.5208 368.016 99.7344 367.664 99.8906C367.313 100.047 366.904 100.125 366.438 100.125C365.826 100.125 365.319 99.9922 364.918 99.7266C364.517 99.4609 364.263 99.0729 364.156 98.5625L365.031 98.3437C365.115 98.6667 365.272 98.9089 365.504 99.0703C365.738 99.2318 366.044 99.3125 366.422 99.3125C366.852 99.3125 367.193 99.2214 367.445 99.0391C367.701 98.8542 367.828 98.6328 367.828 98.375C367.828 98.1667 367.755 97.9922 367.609 97.8516C367.464 97.7083 367.24 97.6016 366.938 97.5312L365.938 97.2969C365.388 97.1667 364.984 96.9648 364.727 96.6914C364.471 96.4154 364.344 96.0703 364.344 95.6562C364.344 95.3177 364.439 95.0182 364.629 94.7578C364.822 94.4974 365.083 94.293 365.414 94.1445C365.747 93.9961 366.125 93.9219 366.547 93.9219C367.141 93.9219 367.607 94.0521 367.945 94.3125C368.286 94.5729 368.529 94.9167 368.672 95.3437ZM373.153 100L374.466 92H375.247L373.935 100H373.153ZM369.513 97.7812L369.638 97H375.606L375.481 97.7812H369.513ZM370.341 100L371.653 92H372.435L371.122 100H370.341ZM369.981 95L370.106 94.2187H376.075L375.95 95H369.981ZM377.093 100V99.2969L379.733 96.4062C380.043 96.0677 380.299 95.7734 380.499 95.5234C380.7 95.2708 380.848 95.0339 380.944 94.8125C381.043 94.5885 381.093 94.3542 381.093 94.1094C381.093 93.8281 381.025 93.5846 380.89 93.3789C380.757 93.1732 380.575 93.0143 380.343 92.9023C380.111 92.7904 379.851 92.7344 379.562 92.7344C379.254 92.7344 378.986 92.7982 378.757 92.9258C378.53 93.0508 378.354 93.2266 378.229 93.4531C378.107 93.6797 378.046 93.9453 378.046 94.25H377.124C377.124 93.7812 377.232 93.3698 377.448 93.0156C377.664 92.6615 377.959 92.3854 378.331 92.1875C378.706 91.9896 379.127 91.8906 379.593 91.8906C380.062 91.8906 380.477 91.9896 380.839 92.1875C381.201 92.3854 381.485 92.6523 381.69 92.9883C381.896 93.3242 381.999 93.6979 381.999 94.1094C381.999 94.4036 381.946 94.6914 381.839 94.9727C381.735 95.2513 381.552 95.5625 381.292 95.9062C381.034 96.2474 380.676 96.6641 380.218 97.1562L378.421 99.0781V99.1406H382.14V100H377.093ZM383.753 100V99.2969L386.394 96.4062C386.703 96.0677 386.959 95.7734 387.159 95.5234C387.36 95.2708 387.508 95.0339 387.604 94.8125C387.703 94.5885 387.753 94.3542 387.753 94.1094C387.753 93.8281 387.685 93.5846 387.55 93.3789C387.417 93.1732 387.235 93.0143 387.003 92.9023C386.771 92.7904 386.511 92.7344 386.222 92.7344C385.914 92.7344 385.646 92.7982 385.417 92.9258C385.19 93.0508 385.015 93.2266 384.89 93.4531C384.767 93.6797 384.706 93.9453 384.706 94.25H383.784C383.784 93.7812 383.892 93.3698 384.108 93.0156C384.325 92.6615 384.619 92.3854 384.991 92.1875C385.366 91.9896 385.787 91.8906 386.253 91.8906C386.722 91.8906 387.137 91.9896 387.499 92.1875C387.861 92.3854 388.145 92.6523 388.351 92.9883C388.556 93.3242 388.659 93.6979 388.659 94.1094C388.659 94.4036 388.606 94.6914 388.499 94.9727C388.395 95.2513 388.213 95.5625 387.952 95.9062C387.694 96.2474 387.336 96.6641 386.878 97.1562L385.081 99.0781V99.1406H388.8V100H383.753Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="row-1-title" d="M40.5327 100H39.3324L42.804 90.5455H43.9858L47.4574 100H46.2571L43.4318 92.0412H43.358L40.5327 100ZM40.9759 96.3068H45.8139V97.3224H40.9759V96.3068ZM51.4599 100.148C50.869 100.148 50.3473 99.9985 49.8949 99.6999C49.4425 99.3983 49.0885 98.9736 48.8331 98.4258C48.5777 97.8749 48.4499 97.224 48.4499 96.473C48.4499 95.7282 48.5777 95.0819 48.8331 94.5341C49.0885 93.9863 49.444 93.5631 49.8995 93.2646C50.355 92.966 50.8813 92.8168 51.4783 92.8168C51.94 92.8168 52.3047 92.8937 52.5724 93.0476C52.8433 93.1984 53.0495 93.3707 53.1911 93.5646C53.3357 93.7554 53.448 93.9124 53.5281 94.0355H53.6204V90.5455H54.7099V100H53.6573V98.9105H53.5281C53.448 99.0398 53.3342 99.2029 53.1864 99.3999C53.0387 99.5937 52.8279 99.7676 52.554 99.9215C52.2801 100.072 51.9154 100.148 51.4599 100.148ZM51.6076 99.169C52.0446 99.169 52.4139 99.0552 52.7156 98.8274C53.0172 98.5966 53.2464 98.2781 53.4034 97.8718C53.5604 97.4625 53.6388 96.9901 53.6388 96.4545C53.6388 95.9252 53.5619 95.462 53.408 95.065C53.2541 94.6649 53.0264 94.354 52.7248 94.1325C52.4232 93.9078 52.0508 93.7955 51.6076 93.7955C51.146 93.7955 50.7612 93.9139 50.4535 94.1509C50.1488 94.3848 49.9195 94.7034 49.7656 95.1065C49.6148 95.5066 49.5394 95.956 49.5394 96.4545C49.5394 96.9593 49.6164 97.4179 49.7702 97.8303C49.9272 98.2396 50.158 98.5658 50.4627 98.8089C50.7705 99.049 51.1521 99.169 51.6076 99.169ZM59.5341 100.148C58.9432 100.148 58.4215 99.9985 57.9691 99.6999C57.5167 99.3983 57.1628 98.9736 56.9073 98.4258C56.6519 97.8749 56.5241 97.224 56.5241 96.473C56.5241 95.7282 56.6519 95.0819 56.9073 94.5341C57.1628 93.9863 57.5182 93.5631 57.9737 93.2646C58.4292 92.966 58.9555 92.8168 59.5526 92.8168C60.0142 92.8168 60.3789 92.8937 60.6467 93.0476C60.9175 93.1984 61.1237 93.3707 61.2653 93.5646C61.4099 93.7554 61.5223 93.9124 61.6023 94.0355H61.6946V90.5455H62.7841V100H61.7315V98.9105H61.6023C61.5223 99.0398 61.4084 99.2029 61.2607 99.3999C61.1129 99.5937 60.9021 99.7676 60.6282 99.9215C60.3543 100.072 59.9896 100.148 59.5341 100.148ZM59.6818 99.169C60.1188 99.169 60.4882 99.0552 60.7898 98.8274C61.0914 98.5966 61.3207 98.2781 61.4776 97.8718C61.6346 97.4625 61.7131 96.9901 61.7131 96.4545C61.7131 95.9252 61.6361 95.462 61.4822 95.065C61.3284 94.6649 61.1006 94.354 60.799 94.1325C60.4974 93.9078 60.125 93.7955 59.6818 93.7955C59.2202 93.7955 58.8355 93.9139 58.5277 94.1509C58.223 94.3848 57.9937 94.7034 57.8398 95.1065C57.689 95.5066 57.6136 95.956 57.6136 96.4545C57.6136 96.9593 57.6906 97.4179 57.8445 97.8303C58.0014 98.2396 58.2322 98.5658 58.5369 98.8089C58.8447 99.049 59.2263 99.169 59.6818 99.169ZM69.9535 94.4972L68.9748 94.7741C68.9132 94.611 68.8224 94.4525 68.7024 94.2987C68.5855 94.1417 68.4254 94.0124 68.2223 93.9109C68.0192 93.8093 67.7591 93.7585 67.4421 93.7585C67.0082 93.7585 66.6465 93.8585 66.3572 94.0586C66.071 94.2556 65.9279 94.5064 65.9279 94.8111C65.9279 95.0819 66.0264 95.2958 66.2234 95.4528C66.4203 95.6097 66.7281 95.7405 67.1467 95.8452L68.1992 96.1037C68.8332 96.2576 69.3056 96.493 69.6165 96.81C69.9273 97.1239 70.0827 97.5286 70.0827 98.0241C70.0827 98.4304 69.9658 98.7936 69.7319 99.1136C69.5011 99.4337 69.1779 99.6861 68.7624 99.8707C68.3469 100.055 67.8638 100.148 67.3129 100.148C66.5896 100.148 65.991 99.9908 65.517 99.6768C65.0431 99.3629 64.743 98.9044 64.6168 98.3011L65.6509 98.0426C65.7494 98.4242 65.9356 98.7105 66.2095 98.9013C66.4865 99.0921 66.8481 99.1875 67.2944 99.1875C67.8022 99.1875 68.2054 99.0798 68.5039 98.8643C68.8055 98.6458 68.9563 98.3842 68.9563 98.0795C68.9563 97.8333 68.8701 97.6271 68.6978 97.4609C68.5254 97.2917 68.2608 97.1655 67.9038 97.0824L66.7219 96.8054C66.0726 96.6515 65.5955 96.413 65.2908 96.0898C64.9892 95.7636 64.8384 95.3558 64.8384 94.8665C64.8384 94.4664 64.9508 94.1125 65.1754 93.8047C65.4032 93.4969 65.7125 93.2553 66.1033 93.0799C66.4973 92.9045 66.9435 92.8168 67.4421 92.8168C68.1438 92.8168 68.6947 92.9706 69.0948 93.2784C69.498 93.5862 69.7842 93.9924 69.9535 94.4972ZM75.379 100V92.9091H76.4316V93.9801H76.5054C76.6347 93.6293 76.8686 93.3446 77.2071 93.1261C77.5457 92.9076 77.9273 92.7983 78.352 92.7983C78.432 92.7983 78.532 92.7998 78.6521 92.8029C78.7721 92.806 78.8629 92.8106 78.9244 92.8168V93.9247C78.8875 93.9155 78.8029 93.9016 78.6705 93.8832C78.5413 93.8616 78.4043 93.8509 78.2597 93.8509C77.915 93.8509 77.6072 93.9232 77.3364 94.0678C77.0686 94.2094 76.8563 94.4064 76.6993 94.6587C76.5454 94.908 76.4685 95.1927 76.4685 95.5128V100H75.379ZM82.9731 100.148C82.2899 100.148 81.7005 99.9969 81.205 99.6953C80.7126 99.3906 80.3325 98.9659 80.0647 98.4212C79.8 97.8733 79.6677 97.2363 79.6677 96.5099C79.6677 95.7836 79.8 95.1435 80.0647 94.5895C80.3325 94.0324 80.7049 93.5985 81.1819 93.2876C81.662 92.9737 82.2222 92.8168 82.8623 92.8168C83.2316 92.8168 83.5963 92.8783 83.9564 93.0014C84.3165 93.1245 84.6443 93.3246 84.9397 93.6016C85.2352 93.8755 85.4706 94.2386 85.646 94.6911C85.8215 95.1435 85.9092 95.7005 85.9092 96.3622V96.8239H80.4433V95.8821H84.8012C84.8012 95.482 84.7212 95.125 84.5612 94.8111C84.4042 94.4972 84.1795 94.2494 83.8872 94.0678C83.5979 93.8862 83.2562 93.7955 82.8623 93.7955C82.4284 93.7955 82.0529 93.9032 81.7359 94.1186C81.422 94.331 81.1804 94.608 81.0111 94.9496C80.8418 95.2912 80.7572 95.6574 80.7572 96.0483V96.6761C80.7572 97.2116 80.8495 97.6656 81.0342 98.038C81.2219 98.4073 81.482 98.6889 81.8144 98.8828C82.1468 99.0736 82.533 99.169 82.9731 99.169C83.2593 99.169 83.5178 99.129 83.7487 99.049C83.9826 98.9659 84.1842 98.8428 84.3534 98.6797C84.5227 98.5135 84.6535 98.3073 84.7458 98.0611L85.7984 98.3565C85.6876 98.7135 85.5014 99.0275 85.2398 99.2983C84.9782 99.5661 84.655 99.7753 84.2703 99.9261C83.8856 100.074 83.4532 100.148 82.9731 100.148ZM89.6531 100.166C89.2038 100.166 88.796 100.082 88.4298 99.9123C88.0635 99.7399 87.7727 99.4922 87.5573 99.169C87.3418 98.8428 87.2341 98.4489 87.2341 97.9872C87.2341 97.581 87.3141 97.2517 87.4742 96.9993C87.6342 96.7438 87.8481 96.5438 88.1159 96.3991C88.3836 96.2545 88.6791 96.1468 89.0022 96.076C89.3285 96.0021 89.6562 95.9437 89.9855 95.9006C90.4164 95.8452 90.7657 95.8036 91.0335 95.7759C91.3043 95.7451 91.5013 95.6944 91.6244 95.6236C91.7506 95.5528 91.8137 95.4297 91.8137 95.2543V95.2173C91.8137 94.7618 91.689 94.4079 91.4397 94.1555C91.1935 93.9032 90.8196 93.777 90.3179 93.777C89.7978 93.777 89.39 93.8909 89.0945 94.1186C88.7991 94.3464 88.5914 94.5895 88.4713 94.848L87.4372 94.4787C87.6219 94.0478 87.8681 93.7124 88.1759 93.4723C88.4867 93.2292 88.8253 93.0599 89.1915 92.9645C89.5608 92.866 89.924 92.8168 90.281 92.8168C90.5087 92.8168 90.7703 92.8445 91.0658 92.8999C91.3643 92.9522 91.6521 93.0614 91.9291 93.2276C92.2091 93.3938 92.4415 93.6446 92.6262 93.9801C92.8108 94.3156 92.9031 94.7649 92.9031 95.3281V100H91.8137V99.0398H91.7583C91.6844 99.1937 91.5613 99.3583 91.3889 99.5337C91.2166 99.7092 90.9873 99.8584 90.7011 99.9815C90.4149 100.105 90.0655 100.166 89.6531 100.166ZM89.8193 99.1875C90.2502 99.1875 90.6134 99.1029 90.9088 98.9336C91.2074 98.7643 91.432 98.5458 91.5828 98.2781C91.7367 98.0103 91.8137 97.7287 91.8137 97.4332V96.4361C91.7675 96.4915 91.6659 96.5423 91.509 96.5884C91.3551 96.6315 91.1766 96.67 90.9735 96.7038C90.7734 96.7346 90.578 96.7623 90.3872 96.7869C90.1994 96.8085 90.0471 96.8269 89.9301 96.8423C89.647 96.8793 89.3823 96.9393 89.1361 97.0224C88.893 97.1024 88.696 97.224 88.5452 97.3871C88.3975 97.5471 88.3236 97.7656 88.3236 98.0426C88.3236 98.4212 88.4636 98.7074 88.7437 98.9013C89.0268 99.0921 89.3854 99.1875 89.8193 99.1875ZM97.7724 100.148C97.1076 100.148 96.5352 99.9908 96.055 99.6768C95.5749 99.3629 95.2056 98.9305 94.9471 98.3796C94.6886 97.8287 94.5593 97.1993 94.5593 96.4915C94.5593 95.7713 94.6916 95.1358 94.9563 94.5849C95.2241 94.0309 95.5965 93.5985 96.0735 93.2876C96.5536 92.9737 97.1138 92.8168 97.7539 92.8168C98.2525 92.8168 98.7018 92.9091 99.1019 93.0938C99.502 93.2784 99.8298 93.5369 100.085 93.8693C100.341 94.2017 100.499 94.5895 100.561 95.0327H99.4712C99.3881 94.7095 99.2035 94.4233 98.9173 94.174C98.6341 93.9216 98.2525 93.7955 97.7724 93.7955C97.3477 93.7955 96.9753 93.9062 96.6552 94.1278C96.3382 94.3464 96.0904 94.6557 95.9119 95.0558C95.7365 95.4528 95.6488 95.919 95.6488 96.4545C95.6488 97.0024 95.735 97.4794 95.9073 97.8857C96.0827 98.2919 96.329 98.6074 96.646 98.832C96.966 99.0567 97.3415 99.169 97.7724 99.169C98.0555 99.169 98.3125 99.1198 98.5433 99.0213C98.7741 98.9228 98.9696 98.7812 99.1296 98.5966C99.2897 98.4119 99.4035 98.1903 99.4712 97.9318H100.561C100.499 98.3504 100.347 98.7274 100.104 99.0629C99.8636 99.3952 99.5451 99.6599 99.1481 99.8569C98.7541 100.051 98.2956 100.148 97.7724 100.148ZM105.237 92.9091V93.8324H101.562V92.9091H105.237ZM102.634 91.2102H103.723V97.9688C103.723 98.2765 103.768 98.5073 103.857 98.6612C103.949 98.812 104.066 98.9136 104.208 98.9659C104.352 99.0152 104.505 99.0398 104.665 99.0398C104.785 99.0398 104.883 99.0336 104.96 99.0213C105.037 99.0059 105.099 98.9936 105.145 98.9844L105.366 99.9631C105.293 99.9908 105.19 100.018 105.057 100.046C104.925 100.077 104.757 100.092 104.554 100.092C104.246 100.092 103.945 100.026 103.649 99.8938C103.357 99.7615 103.114 99.5599 102.92 99.2891C102.729 99.0182 102.634 98.6766 102.634 98.2642V91.2102ZM113.505 100.148C112.822 100.148 112.233 99.9969 111.737 99.6953C111.245 99.3906 110.865 98.9659 110.597 98.4212C110.332 97.8733 110.2 97.2363 110.2 96.5099C110.2 95.7836 110.332 95.1435 110.597 94.5895C110.865 94.0324 111.237 93.5985 111.714 93.2876C112.194 92.9737 112.754 92.8168 113.395 92.8168C113.764 92.8168 114.129 92.8783 114.489 93.0014C114.849 93.1245 115.176 93.3246 115.472 93.6016C115.767 93.8755 116.003 94.2386 116.178 94.6911C116.354 95.1435 116.441 95.7005 116.441 96.3622V96.8239H110.975V95.8821H115.333C115.333 95.482 115.253 95.125 115.093 94.8111C114.936 94.4972 114.712 94.2494 114.419 94.0678C114.13 93.8862 113.788 93.7955 113.395 93.7955C112.961 93.7955 112.585 93.9032 112.268 94.1186C111.954 94.331 111.713 94.608 111.543 94.9496C111.374 95.2912 111.289 95.6574 111.289 96.0483V96.6761C111.289 97.2116 111.382 97.6656 111.566 98.038C111.754 98.4073 112.014 98.6889 112.347 98.8828C112.679 99.0736 113.065 99.169 113.505 99.169C113.792 99.169 114.05 99.129 114.281 99.049C114.515 98.9659 114.716 98.8428 114.886 98.6797C115.055 98.5135 115.186 98.3073 115.278 98.0611L116.331 98.3565C116.22 98.7135 116.034 99.0275 115.772 99.2983C115.51 99.5661 115.187 99.7753 114.803 99.9261C114.418 100.074 113.985 100.148 113.505 100.148ZM119.188 95.7344V100H118.099V92.9091H119.151V94.017H119.244C119.41 93.657 119.662 93.3677 120.001 93.1491C120.339 92.9276 120.776 92.8168 121.312 92.8168C121.792 92.8168 122.212 92.9152 122.572 93.1122C122.932 93.3061 123.212 93.6016 123.412 93.9986C123.612 94.3925 123.712 94.8911 123.712 95.4943V100H122.623V95.5682C122.623 95.0111 122.478 94.5772 122.189 94.2663C121.9 93.9524 121.503 93.7955 120.998 93.7955C120.65 93.7955 120.339 93.8709 120.065 94.0217C119.795 94.1725 119.581 94.3925 119.424 94.6818C119.267 94.9711 119.188 95.322 119.188 95.7344ZM128.787 92.9091V93.8324H125.112V92.9091H128.787ZM126.183 91.2102H127.273V97.9688C127.273 98.2765 127.317 98.5073 127.407 98.6612C127.499 98.812 127.616 98.9136 127.758 98.9659C127.902 99.0152 128.055 99.0398 128.215 99.0398C128.335 99.0398 128.433 99.0336 128.51 99.0213C128.587 99.0059 128.649 98.9936 128.695 98.9844L128.916 99.9631C128.842 99.9908 128.739 100.018 128.607 100.046C128.475 100.077 128.307 100.092 128.104 100.092C127.796 100.092 127.494 100.026 127.199 99.8938C126.907 99.7615 126.663 99.5599 126.47 99.2891C126.279 99.0182 126.183 98.6766 126.183 98.2642V91.2102ZM130.426 100V92.9091H131.478V93.9801H131.552C131.682 93.6293 131.915 93.3446 132.254 93.1261C132.593 92.9076 132.974 92.7983 133.399 92.7983C133.479 92.7983 133.579 92.7998 133.699 92.8029C133.819 92.806 133.91 92.8106 133.971 92.8168V93.9247C133.934 93.9155 133.85 93.9016 133.717 93.8832C133.588 93.8616 133.451 93.8509 133.307 93.8509C132.962 93.8509 132.654 93.9232 132.383 94.0678C132.116 94.2094 131.903 94.4064 131.746 94.6587C131.592 94.908 131.515 95.1927 131.515 95.5128V100H130.426ZM136.18 102.659C135.996 102.659 135.831 102.644 135.686 102.613C135.542 102.585 135.442 102.558 135.386 102.53L135.663 101.57C135.928 101.637 136.162 101.662 136.365 101.643C136.568 101.625 136.748 101.534 136.905 101.371C137.065 101.211 137.211 100.951 137.344 100.591L137.547 100.037L134.925 92.9091H136.106L138.064 98.5597H138.138L140.095 92.9091H141.277L138.267 101.034C138.132 101.4 137.964 101.703 137.764 101.944C137.564 102.187 137.331 102.367 137.067 102.484C136.805 102.601 136.51 102.659 136.18 102.659ZM146.371 102.659V92.9091H147.424V94.0355H147.553C147.633 93.9124 147.744 93.7554 147.885 93.5646C148.03 93.3707 148.236 93.1984 148.504 93.0476C148.775 92.8937 149.141 92.8168 149.603 92.8168C150.2 92.8168 150.726 92.966 151.182 93.2646C151.637 93.5631 151.993 93.9863 152.248 94.5341C152.503 95.0819 152.631 95.7282 152.631 96.473C152.631 97.224 152.503 97.8749 152.248 98.4258C151.993 98.9736 151.639 99.3983 151.186 99.6999C150.734 99.9985 150.212 100.148 149.621 100.148C149.166 100.148 148.801 100.072 148.527 99.9215C148.253 99.7676 148.042 99.5937 147.895 99.3999C147.747 99.2029 147.633 99.0398 147.553 98.9105H147.461V102.659H146.371ZM147.442 96.4545C147.442 96.9901 147.521 97.4625 147.678 97.8718C147.835 98.2781 148.064 98.5966 148.366 98.8274C148.667 99.0552 149.036 99.169 149.473 99.169C149.929 99.169 150.309 99.049 150.614 98.8089C150.921 98.5658 151.152 98.2396 151.306 97.8303C151.463 97.4179 151.542 96.9593 151.542 96.4545C151.542 95.956 151.465 95.5066 151.311 95.1065C151.16 94.7034 150.931 94.3848 150.623 94.1509C150.318 93.9139 149.935 93.7955 149.473 93.7955C149.03 93.7955 148.658 93.9078 148.356 94.1325C148.055 94.354 147.827 94.6649 147.673 95.065C147.519 95.462 147.442 95.9252 147.442 96.4545ZM157.174 100.148C156.534 100.148 155.972 99.9954 155.489 99.6907C155.009 99.386 154.633 98.9598 154.362 98.4119C154.095 97.8641 153.961 97.224 153.961 96.4915C153.961 95.7528 154.095 95.1081 154.362 94.5572C154.633 94.0063 155.009 93.5785 155.489 93.2738C155.972 92.9691 156.534 92.8168 157.174 92.8168C157.814 92.8168 158.374 92.9691 158.854 93.2738C159.337 93.5785 159.713 94.0063 159.981 94.5572C160.251 95.1081 160.387 95.7528 160.387 96.4915C160.387 97.224 160.251 97.8641 159.981 98.4119C159.713 98.9598 159.337 99.386 158.854 99.6907C158.374 99.9954 157.814 100.148 157.174 100.148ZM157.174 99.169C157.66 99.169 158.06 99.0444 158.374 98.7951C158.688 98.5458 158.92 98.218 159.071 97.8118C159.222 97.4055 159.297 96.9654 159.297 96.4915C159.297 96.0175 159.222 95.5759 159.071 95.1665C158.92 94.7572 158.688 94.4264 158.374 94.174C158.06 93.9216 157.66 93.7955 157.174 93.7955C156.687 93.7955 156.287 93.9216 155.973 94.174C155.66 94.4264 155.427 94.7572 155.276 95.1665C155.126 95.5759 155.05 96.0175 155.05 96.4915C155.05 96.9654 155.126 97.4055 155.276 97.8118C155.427 98.218 155.66 98.5458 155.973 98.7951C156.287 99.0444 156.687 99.169 157.174 99.169ZM162.05 100V92.9091H163.139V100H162.05ZM162.604 91.7273C162.392 91.7273 162.208 91.6549 162.055 91.5103C161.904 91.3656 161.828 91.1918 161.828 90.9886C161.828 90.7855 161.904 90.6116 162.055 90.467C162.208 90.3223 162.392 90.25 162.604 90.25C162.816 90.25 162.998 90.3223 163.149 90.467C163.302 90.6116 163.379 90.7855 163.379 90.9886C163.379 91.1918 163.302 91.3656 163.149 91.5103C162.998 91.6549 162.816 91.7273 162.604 91.7273ZM166.224 95.7344V100H165.135V92.9091H166.187V94.017H166.28C166.446 93.657 166.698 93.3677 167.037 93.1491C167.375 92.9276 167.812 92.8168 168.348 92.8168C168.828 92.8168 169.248 92.9152 169.608 93.1122C169.968 93.3061 170.248 93.6016 170.448 93.9986C170.648 94.3925 170.748 94.8911 170.748 95.4943V100H169.659V95.5682C169.659 95.0111 169.514 94.5772 169.225 94.2663C168.936 93.9524 168.539 93.7955 168.034 93.7955C167.686 93.7955 167.375 93.8709 167.101 94.0217C166.831 94.1725 166.617 94.3925 166.46 94.6818C166.303 94.9711 166.224 95.322 166.224 95.7344ZM175.823 92.9091V93.8324H172.148V92.9091H175.823ZM173.219 91.2102H174.309V97.9688C174.309 98.2765 174.354 98.5073 174.443 98.6612C174.535 98.812 174.652 98.9136 174.794 98.9659C174.938 99.0152 175.091 99.0398 175.251 99.0398C175.371 99.0398 175.469 99.0336 175.546 99.0213C175.623 99.0059 175.685 98.9936 175.731 98.9844L175.952 99.9631C175.879 99.9908 175.775 100.018 175.643 100.046C175.511 100.077 175.343 100.092 175.14 100.092C174.832 100.092 174.531 100.026 174.235 99.8938C173.943 99.7615 173.7 99.5599 173.506 99.2891C173.315 99.0182 173.219 98.6766 173.219 98.2642V91.2102Z" fill="var(--vscode-quickInput-foreground)"/>
<g id="row-1-avatar-clip" clip-path="url(#clip1_46_2)">
<path id="row-1-avatar" d="M32 94.992C32 90.58 28.416 87 24 87C19.584 87 16 90.58 16 94.992C16 97.422 17.104 99.612 18.832 101.082C18.848 101.098 18.864 101.098 18.864 101.114C19.008 101.226 19.152 101.338 19.312 101.45C19.392 101.498 19.456 101.561 19.536 101.625C20.8581 102.521 22.4187 103 24.016 103C25.6133 103 27.1739 102.521 28.496 101.625C28.576 101.577 28.64 101.514 28.72 101.465C28.864 101.354 29.024 101.242 29.168 101.13C29.184 101.114 29.2 101.114 29.2 101.098C30.896 99.611 32 97.422 32 94.992ZM24 101.993C22.496 101.993 21.12 101.513 19.984 100.714C20 100.586 20.032 100.459 20.064 100.331C20.1593 99.9841 20.2992 99.651 20.48 99.34C20.656 99.036 20.864 98.764 21.12 98.524C21.36 98.284 21.648 98.061 21.936 97.885C22.24 97.709 22.56 97.581 22.912 97.485C23.2667 97.3894 23.6326 97.3413 24 97.342C25.0907 97.3343 26.1412 97.7526 26.928 98.508C27.296 98.876 27.584 99.308 27.792 99.803C27.904 100.091 27.984 100.395 28.032 100.714C26.8512 101.544 25.4434 101.991 24 101.993ZM21.552 94.593C21.411 94.2702 21.3401 93.9212 21.344 93.569C21.344 93.218 21.408 92.866 21.552 92.546C21.696 92.226 21.888 91.939 22.128 91.699C22.368 91.459 22.656 91.268 22.976 91.124C23.296 90.98 23.648 90.916 24 90.916C24.368 90.916 24.704 90.98 25.024 91.124C25.344 91.268 25.632 91.46 25.872 91.699C26.112 91.939 26.304 92.227 26.448 92.546C26.592 92.866 26.656 93.218 26.656 93.569C26.656 93.937 26.592 94.273 26.448 94.592C26.309 94.9073 26.1138 95.1946 25.872 95.44C25.6265 95.6815 25.3392 95.8763 25.024 96.015C24.3628 96.2867 23.6212 96.2867 22.96 96.015C22.6448 95.8763 22.3575 95.6815 22.112 95.44C21.8698 95.1982 21.6793 94.9107 21.552 94.593ZM28.976 99.899C28.976 99.867 28.96 99.851 28.96 99.819C28.8026 99.3184 28.5707 98.8444 28.272 98.413C27.973 97.9784 27.6056 97.5951 27.184 97.278C26.862 97.0358 26.513 96.8317 26.144 96.67C26.3119 96.5592 26.4674 96.4308 26.608 96.287C26.8465 96.0515 27.056 95.7883 27.232 95.503C27.5864 94.9208 27.7694 94.2505 27.76 93.569C27.7649 93.0645 27.667 92.5643 27.472 92.099C27.2795 91.6506 27.0025 91.2436 26.656 90.9C26.31 90.56 25.9029 90.2886 25.456 90.1C24.9899 89.9054 24.4891 89.8077 23.984 89.813C23.4789 89.8081 22.978 89.9061 22.512 90.101C22.0613 90.2892 21.6531 90.5664 21.312 90.916C20.972 91.2616 20.7006 91.6684 20.512 92.115C20.317 92.5803 20.2191 93.0805 20.224 93.585C20.224 93.937 20.272 94.273 20.368 94.592C20.464 94.928 20.592 95.232 20.768 95.519C20.928 95.807 21.152 96.063 21.392 96.303C21.536 96.447 21.696 96.574 21.872 96.686C21.5018 96.8521 21.1527 97.0615 20.832 97.31C20.416 97.63 20.048 98.013 19.744 98.429C19.4423 98.8586 19.2101 99.3331 19.056 99.835C19.04 99.867 19.04 99.899 19.04 99.915C17.776 98.636 16.992 96.91 16.992 94.992C16.992 91.14 20.144 87.991 24 87.991C27.856 87.991 31.008 91.14 31.008 94.992C31.0059 96.832 30.2753 98.5962 28.976 99.899Z" fill="var(--vscode-quickInput-foreground)"/>
</g>
<path id="row-2-2ndline" opacity="0.7" d="M47.642 178.545V188H46.5341L41.3821 180.577H41.2898V188H40.1449V178.545H41.2528L46.4233 185.987H46.5156V178.545H47.642ZM52.7583 188.148C52.075 188.148 51.4856 187.997 50.9901 187.695C50.4977 187.391 50.1176 186.966 49.8499 186.421C49.5852 185.873 49.4529 185.236 49.4529 184.51C49.4529 183.784 49.5852 183.143 49.8499 182.589C50.1176 182.032 50.49 181.598 50.9671 181.288C51.4472 180.974 52.0073 180.817 52.6475 180.817C53.0168 180.817 53.3815 180.878 53.7416 181.001C54.1017 181.125 54.4294 181.325 54.7249 181.602C55.0203 181.875 55.2558 182.239 55.4312 182.691C55.6066 183.143 55.6943 183.701 55.6943 184.362V184.824H50.2284V183.882H54.5864C54.5864 183.482 54.5064 183.125 54.3463 182.811C54.1894 182.497 53.9647 182.249 53.6723 182.068C53.383 181.886 53.0414 181.795 52.6475 181.795C52.2135 181.795 51.838 181.903 51.521 182.119C51.2071 182.331 50.9655 182.608 50.7963 182.95C50.627 183.291 50.5423 183.657 50.5423 184.048V184.676C50.5423 185.212 50.6347 185.666 50.8193 186.038C51.0071 186.407 51.2671 186.689 51.5995 186.883C51.9319 187.074 52.3182 187.169 52.7583 187.169C53.0445 187.169 53.303 187.129 53.5338 187.049C53.7677 186.966 53.9693 186.843 54.1386 186.68C54.3079 186.513 54.4387 186.307 54.531 186.061L55.5835 186.357C55.4727 186.714 55.2865 187.027 55.0249 187.298C54.7633 187.566 54.4402 187.775 54.0555 187.926C53.6708 188.074 53.2384 188.148 52.7583 188.148ZM60.3247 188.148C59.6414 188.148 59.0521 187.997 58.5566 187.695C58.0641 187.391 57.684 186.966 57.4163 186.421C57.1516 185.873 57.0193 185.236 57.0193 184.51C57.0193 183.784 57.1516 183.143 57.4163 182.589C57.684 182.032 58.0564 181.598 58.5335 181.288C59.0136 180.974 59.5737 180.817 60.2139 180.817C60.5832 180.817 60.9479 180.878 61.308 181.001C61.6681 181.125 61.9958 181.325 62.2913 181.602C62.5867 181.875 62.8222 182.239 62.9976 182.691C63.173 183.143 63.2607 183.701 63.2607 184.362V184.824H57.7948V183.882H62.1528C62.1528 183.482 62.0728 183.125 61.9127 182.811C61.7558 182.497 61.5311 182.249 61.2387 182.068C60.9494 181.886 60.6078 181.795 60.2139 181.795C59.7799 181.795 59.4044 181.903 59.0874 182.119C58.7735 182.331 58.5319 182.608 58.3627 182.95C58.1934 183.291 58.1088 183.657 58.1088 184.048V184.676C58.1088 185.212 58.2011 185.666 58.3857 186.038C58.5735 186.407 58.8335 186.689 59.1659 186.883C59.4983 187.074 59.8846 187.169 60.3247 187.169C60.6109 187.169 60.8694 187.129 61.1002 187.049C61.3341 186.966 61.5357 186.843 61.705 186.68C61.8743 186.513 62.0051 186.307 62.0974 186.061L63.1499 186.357C63.0392 186.714 62.853 187.027 62.5914 187.298C62.3298 187.566 62.0066 187.775 61.6219 187.926C61.2372 188.074 60.8048 188.148 60.3247 188.148ZM67.5956 188.148C67.0047 188.148 66.483 187.998 66.0306 187.7C65.5782 187.398 65.2243 186.974 64.9688 186.426C64.7134 185.875 64.5857 185.224 64.5857 184.473C64.5857 183.728 64.7134 183.082 64.9688 182.534C65.2243 181.986 65.5798 181.563 66.0352 181.265C66.4907 180.966 67.017 180.817 67.6141 180.817C68.0757 180.817 68.4404 180.894 68.7082 181.048C68.979 181.198 69.1852 181.371 69.3268 181.565C69.4714 181.755 69.5838 181.912 69.6638 182.036H69.7561V178.545H70.8456V188H69.7931V186.911H69.6638C69.5838 187.04 69.4699 187.203 69.3222 187.4C69.1744 187.594 68.9636 187.768 68.6897 187.922C68.4158 188.072 68.0511 188.148 67.5956 188.148ZM67.7433 187.169C68.1804 187.169 68.5497 187.055 68.8513 186.827C69.1529 186.597 69.3822 186.278 69.5392 185.872C69.6961 185.462 69.7746 184.99 69.7746 184.455C69.7746 183.925 69.6977 183.462 69.5438 183.065C69.3899 182.665 69.1621 182.354 68.8605 182.132C68.5589 181.908 68.1865 181.795 67.7433 181.795C67.2817 181.795 66.897 181.914 66.5892 182.151C66.2845 182.385 66.0552 182.703 65.9014 183.107C65.7506 183.507 65.6752 183.956 65.6752 184.455C65.6752 184.959 65.7521 185.418 65.906 185.83C66.0629 186.24 66.2938 186.566 66.5985 186.809C66.9062 187.049 67.2878 187.169 67.7433 187.169ZM78.015 182.497L77.0363 182.774C76.9748 182.611 76.884 182.453 76.7639 182.299C76.647 182.142 76.4869 182.012 76.2838 181.911C76.0807 181.809 75.8206 181.759 75.5036 181.759C75.0697 181.759 74.7081 181.859 74.4188 182.059C74.1325 182.256 73.9894 182.506 73.9894 182.811C73.9894 183.082 74.0879 183.296 74.2849 183.453C74.4819 183.61 74.7896 183.741 75.2082 183.845L76.2607 184.104C76.8947 184.258 77.3672 184.493 77.678 184.81C77.9888 185.124 78.1443 185.529 78.1443 186.024C78.1443 186.43 78.0273 186.794 77.7934 187.114C77.5626 187.434 77.2394 187.686 76.824 187.871C76.4085 188.055 75.9253 188.148 75.3744 188.148C74.6511 188.148 74.0525 187.991 73.5786 187.677C73.1046 187.363 72.8045 186.904 72.6784 186.301L73.7124 186.043C73.8109 186.424 73.9971 186.71 74.271 186.901C74.548 187.092 74.9097 187.188 75.3559 187.188C75.8637 187.188 76.2669 187.08 76.5654 186.864C76.867 186.646 77.0178 186.384 77.0178 186.08C77.0178 185.833 76.9317 185.627 76.7593 185.461C76.587 185.292 76.3223 185.165 75.9653 185.082L74.7835 184.805C74.1341 184.652 73.657 184.413 73.3524 184.09C73.0508 183.764 72.8999 183.356 72.8999 182.866C72.8999 182.466 73.0123 182.112 73.2369 181.805C73.4647 181.497 73.774 181.255 74.1649 181.08C74.5588 180.904 75.0051 180.817 75.5036 180.817C76.2053 180.817 76.7562 180.971 77.1563 181.278C77.5595 181.586 77.8457 181.992 78.015 182.497ZM84.1422 190.659C83.9576 190.659 83.7929 190.644 83.6483 190.613C83.5036 190.585 83.4036 190.558 83.3482 190.53L83.6252 189.57C83.8899 189.637 84.1238 189.662 84.3269 189.643C84.53 189.625 84.71 189.534 84.867 189.371C85.027 189.211 85.1732 188.951 85.3056 188.591L85.5087 188.037L82.8865 180.909H84.0684L86.0257 186.56H86.0996L88.057 180.909H89.2388L86.2289 189.034C86.0935 189.4 85.9257 189.703 85.7257 189.944C85.5256 190.187 85.2933 190.367 85.0286 190.484C84.767 190.601 84.4715 190.659 84.1422 190.659ZM93.3036 188.148C92.6635 188.148 92.1018 187.995 91.6186 187.691C91.1385 187.386 90.763 186.96 90.4922 186.412C90.2244 185.864 90.0906 185.224 90.0906 184.491C90.0906 183.753 90.2244 183.108 90.4922 182.557C90.763 182.006 91.1385 181.578 91.6186 181.274C92.1018 180.969 92.6635 180.817 93.3036 180.817C93.9438 180.817 94.5039 180.969 94.984 181.274C95.4672 181.578 95.8427 182.006 96.1104 182.557C96.3813 183.108 96.5167 183.753 96.5167 184.491C96.5167 185.224 96.3813 185.864 96.1104 186.412C95.8427 186.96 95.4672 187.386 94.984 187.691C94.5039 187.995 93.9438 188.148 93.3036 188.148ZM93.3036 187.169C93.7899 187.169 94.19 187.044 94.5039 186.795C94.8178 186.546 95.0502 186.218 95.201 185.812C95.3518 185.406 95.4272 184.965 95.4272 184.491C95.4272 184.018 95.3518 183.576 95.201 183.167C95.0502 182.757 94.8178 182.426 94.5039 182.174C94.19 181.922 93.7899 181.795 93.3036 181.795C92.8174 181.795 92.4173 181.922 92.1033 182.174C91.7894 182.426 91.5571 182.757 91.4062 183.167C91.2554 183.576 91.18 184.018 91.18 184.491C91.18 184.965 91.2554 185.406 91.4062 185.812C91.5571 186.218 91.7894 186.546 92.1033 186.795C92.4173 187.044 92.8174 187.169 93.3036 187.169ZM102.649 185.101V180.909H103.738V188H102.649V186.8H102.575C102.408 187.16 102.15 187.466 101.799 187.718C101.448 187.968 101.005 188.092 100.47 188.092C100.026 188.092 99.6324 187.995 99.2877 187.801C98.943 187.605 98.6722 187.309 98.4752 186.915C98.2783 186.518 98.1798 186.018 98.1798 185.415V180.909H99.2693V185.341C99.2693 185.858 99.4139 186.27 99.7032 186.578C99.9956 186.886 100.368 187.04 100.82 187.04C101.091 187.04 101.367 186.971 101.647 186.832C101.93 186.694 102.167 186.481 102.358 186.195C102.552 185.909 102.649 185.544 102.649 185.101ZM105.733 188V180.909H106.786V181.98H106.86C106.989 181.629 107.223 181.345 107.562 181.126C107.9 180.908 108.282 180.798 108.706 180.798C108.787 180.798 108.887 180.8 109.007 180.803C109.127 180.806 109.217 180.811 109.279 180.817V181.925C109.242 181.915 109.157 181.902 109.025 181.883C108.896 181.862 108.759 181.851 108.614 181.851C108.269 181.851 107.962 181.923 107.691 182.068C107.423 182.209 107.211 182.406 107.054 182.659C106.9 182.908 106.823 183.193 106.823 183.513V188H105.733ZM114.227 188V180.909H115.279V181.98H115.353C115.482 181.629 115.716 181.345 116.055 181.126C116.393 180.908 116.775 180.798 117.2 180.798C117.28 180.798 117.38 180.8 117.5 180.803C117.62 180.806 117.711 180.811 117.772 180.817V181.925C117.735 181.915 117.651 181.902 117.518 181.883C117.389 181.862 117.252 181.851 117.107 181.851C116.763 181.851 116.455 181.923 116.184 182.068C115.916 182.209 115.704 182.406 115.547 182.659C115.393 182.908 115.316 183.193 115.316 183.513V188H114.227ZM121.821 188.148C121.138 188.148 120.548 187.997 120.053 187.695C119.56 187.391 119.18 186.966 118.912 186.421C118.648 185.873 118.515 185.236 118.515 184.51C118.515 183.784 118.648 183.143 118.912 182.589C119.18 182.032 119.553 181.598 120.03 181.288C120.51 180.974 121.07 180.817 121.71 180.817C122.079 180.817 122.444 180.878 122.804 181.001C123.164 181.125 123.492 181.325 123.787 181.602C124.083 181.875 124.318 182.239 124.494 182.691C124.669 183.143 124.757 183.701 124.757 184.362V184.824H119.291V183.882H123.649C123.649 183.482 123.569 183.125 123.409 182.811C123.252 182.497 123.027 182.249 122.735 182.068C122.446 181.886 122.104 181.795 121.71 181.795C121.276 181.795 120.901 181.903 120.584 182.119C120.27 182.331 120.028 182.608 119.859 182.95C119.689 183.291 119.605 183.657 119.605 184.048V184.676C119.605 185.212 119.697 185.666 119.882 186.038C120.07 186.407 120.33 186.689 120.662 186.883C120.994 187.074 121.381 187.169 121.821 187.169C122.107 187.169 122.366 187.129 122.596 187.049C122.83 186.966 123.032 186.843 123.201 186.68C123.37 186.513 123.501 186.307 123.593 186.061L124.646 186.357C124.535 186.714 124.349 187.027 124.087 187.298C123.826 187.566 123.503 187.775 123.118 187.926C122.733 188.074 122.301 188.148 121.821 188.148ZM131.997 180.909L129.374 188H128.267L125.644 180.909H126.826L128.784 186.56H128.857L130.815 180.909H131.997ZM133.435 188V180.909H134.524V188H133.435ZM133.989 179.727C133.776 179.727 133.593 179.655 133.439 179.51C133.288 179.366 133.213 179.192 133.213 178.989C133.213 178.786 133.288 178.612 133.439 178.467C133.593 178.322 133.776 178.25 133.989 178.25C134.201 178.25 134.383 178.322 134.533 178.467C134.687 178.612 134.764 178.786 134.764 178.989C134.764 179.192 134.687 179.366 134.533 179.51C134.383 179.655 134.201 179.727 133.989 179.727ZM139.493 188.148C138.809 188.148 138.22 187.997 137.725 187.695C137.232 187.391 136.852 186.966 136.584 186.421C136.32 185.873 136.187 185.236 136.187 184.51C136.187 183.784 136.32 183.143 136.584 182.589C136.852 182.032 137.224 181.598 137.701 181.288C138.182 180.974 138.742 180.817 139.382 180.817C139.751 180.817 140.116 180.878 140.476 181.001C140.836 181.125 141.164 181.325 141.459 181.602C141.755 181.875 141.99 182.239 142.166 182.691C142.341 183.143 142.429 183.701 142.429 184.362V184.824H136.963V183.882H141.321C141.321 183.482 141.241 183.125 141.081 182.811C140.924 182.497 140.699 182.249 140.407 182.068C140.117 181.886 139.776 181.795 139.382 181.795C138.948 181.795 138.572 181.903 138.255 182.119C137.941 182.331 137.7 182.608 137.531 182.95C137.361 183.291 137.277 183.657 137.277 184.048V184.676C137.277 185.212 137.369 185.666 137.554 186.038C137.741 186.407 138.002 186.689 138.334 186.883C138.666 187.074 139.053 187.169 139.493 187.169C139.779 187.169 140.037 187.129 140.268 187.049C140.502 186.966 140.704 186.843 140.873 186.68C141.042 186.513 141.173 186.307 141.265 186.061L142.318 186.357C142.207 186.714 142.021 187.027 141.759 187.298C141.498 187.566 141.175 187.775 140.79 187.926C140.405 188.074 139.973 188.148 139.493 188.148ZM145.693 188L143.532 180.909H144.677L146.21 186.338H146.283L147.798 180.909H148.961L150.457 186.32H150.531L152.063 180.909H153.208L151.048 188H149.977L148.426 182.553H148.315L146.764 188H145.693ZM160.964 185.304C160.591 185.304 160.251 185.213 159.944 185.032C159.636 184.847 159.39 184.601 159.205 184.293C159.023 183.985 158.933 183.645 158.933 183.273C158.933 182.897 159.023 182.557 159.205 182.252C159.39 181.945 159.636 181.7 159.944 181.518C160.251 181.334 160.591 181.241 160.964 181.241C161.339 181.241 161.679 181.334 161.984 181.518C162.292 181.7 162.537 181.945 162.718 182.252C162.903 182.557 162.995 182.897 162.995 183.273C162.995 183.645 162.903 183.985 162.718 184.293C162.537 184.601 162.292 184.847 161.984 185.032C161.679 185.213 161.339 185.304 160.964 185.304ZM172.45 188.129C171.84 188.129 171.297 188.025 170.82 187.815C170.346 187.606 169.969 187.315 169.689 186.943C169.412 186.567 169.261 186.132 169.237 185.636H170.4C170.425 185.941 170.529 186.204 170.714 186.426C170.899 186.644 171.14 186.814 171.439 186.934C171.737 187.054 172.068 187.114 172.431 187.114C172.837 187.114 173.198 187.043 173.511 186.901C173.825 186.76 174.072 186.563 174.25 186.31C174.429 186.058 174.518 185.766 174.518 185.433C174.518 185.085 174.432 184.779 174.259 184.515C174.087 184.247 173.835 184.038 173.502 183.887C173.17 183.736 172.764 183.661 172.283 183.661H171.526V182.645H172.283C172.659 182.645 172.988 182.577 173.271 182.442C173.558 182.306 173.781 182.116 173.941 181.869C174.104 181.623 174.185 181.334 174.185 181.001C174.185 180.681 174.115 180.403 173.973 180.166C173.832 179.929 173.631 179.744 173.373 179.612C173.118 179.48 172.816 179.413 172.468 179.413C172.142 179.413 171.834 179.473 171.545 179.593C171.259 179.71 171.025 179.881 170.843 180.106C170.662 180.327 170.563 180.595 170.548 180.909H169.44C169.458 180.414 169.607 179.98 169.888 179.607C170.168 179.232 170.534 178.939 170.986 178.73C171.442 178.521 171.942 178.416 172.487 178.416C173.071 178.416 173.573 178.535 173.992 178.772C174.41 179.006 174.732 179.315 174.956 179.7C175.181 180.084 175.293 180.5 175.293 180.946C175.293 181.478 175.153 181.932 174.873 182.308C174.596 182.683 174.219 182.943 173.742 183.088V183.162C174.339 183.26 174.806 183.514 175.141 183.924C175.477 184.33 175.644 184.833 175.644 185.433C175.644 185.947 175.504 186.409 175.224 186.818C174.947 187.224 174.569 187.545 174.089 187.778C173.608 188.012 173.062 188.129 172.45 188.129ZM183.885 188.148C183.294 188.148 182.772 187.998 182.32 187.7C181.867 187.398 181.513 186.974 181.258 186.426C181.002 185.875 180.875 185.224 180.875 184.473C180.875 183.728 181.002 183.082 181.258 182.534C181.513 181.986 181.869 181.563 182.324 181.265C182.78 180.966 183.306 180.817 183.903 180.817C184.365 180.817 184.729 180.894 184.997 181.048C185.268 181.198 185.474 181.371 185.616 181.565C185.761 181.755 185.873 181.912 185.953 182.036H186.045V178.545H187.135V188H186.082V186.911H185.953C185.873 187.04 185.759 187.203 185.611 187.4C185.464 187.594 185.253 187.768 184.979 187.922C184.705 188.072 184.34 188.148 183.885 188.148ZM184.032 187.169C184.469 187.169 184.839 187.055 185.14 186.827C185.442 186.597 185.671 186.278 185.828 185.872C185.985 185.462 186.064 184.99 186.064 184.455C186.064 183.925 185.987 183.462 185.833 183.065C185.679 182.665 185.451 182.354 185.15 182.132C184.848 181.908 184.476 181.795 184.032 181.795C183.571 181.795 183.186 181.914 182.878 182.151C182.574 182.385 182.344 182.703 182.19 183.107C182.04 183.507 181.964 183.956 181.964 184.455C181.964 184.959 182.041 185.418 182.195 185.83C182.352 186.24 182.583 186.566 182.888 186.809C183.195 187.049 183.577 187.169 184.032 187.169ZM191.368 188.166C190.919 188.166 190.511 188.082 190.145 187.912C189.778 187.74 189.488 187.492 189.272 187.169C189.057 186.843 188.949 186.449 188.949 185.987C188.949 185.581 189.029 185.252 189.189 184.999C189.349 184.744 189.563 184.544 189.831 184.399C190.098 184.254 190.394 184.147 190.717 184.076C191.043 184.002 191.371 183.944 191.7 183.901C192.131 183.845 192.481 183.804 192.748 183.776C193.019 183.745 193.216 183.694 193.339 183.624C193.465 183.553 193.528 183.43 193.528 183.254V183.217C193.528 182.762 193.404 182.408 193.155 182.156C192.908 181.903 192.534 181.777 192.033 181.777C191.513 181.777 191.105 181.891 190.809 182.119C190.514 182.346 190.306 182.589 190.186 182.848L189.152 182.479C189.337 182.048 189.583 181.712 189.891 181.472C190.202 181.229 190.54 181.06 190.906 180.964C191.276 180.866 191.639 180.817 191.996 180.817C192.224 180.817 192.485 180.844 192.781 180.9C193.079 180.952 193.367 181.061 193.644 181.228C193.924 181.394 194.156 181.645 194.341 181.98C194.526 182.316 194.618 182.765 194.618 183.328V188H193.528V187.04H193.473C193.399 187.194 193.276 187.358 193.104 187.534C192.931 187.709 192.702 187.858 192.416 187.982C192.13 188.105 191.78 188.166 191.368 188.166ZM191.534 187.188C191.965 187.188 192.328 187.103 192.624 186.934C192.922 186.764 193.147 186.546 193.298 186.278C193.452 186.01 193.528 185.729 193.528 185.433V184.436C193.482 184.491 193.381 184.542 193.224 184.588C193.07 184.632 192.891 184.67 192.688 184.704C192.488 184.735 192.293 184.762 192.102 184.787C191.914 184.808 191.762 184.827 191.645 184.842C191.362 184.879 191.097 184.939 190.851 185.022C190.608 185.102 190.411 185.224 190.26 185.387C190.112 185.547 190.038 185.766 190.038 186.043C190.038 186.421 190.178 186.707 190.459 186.901C190.742 187.092 191.1 187.188 191.534 187.188ZM197.054 190.659C196.87 190.659 196.705 190.644 196.56 190.613C196.416 190.585 196.316 190.558 196.26 190.53L196.537 189.57C196.802 189.637 197.036 189.662 197.239 189.643C197.442 189.625 197.622 189.534 197.779 189.371C197.939 189.211 198.085 188.951 198.218 188.591L198.421 188.037L195.799 180.909H196.98L198.938 186.56H199.012L200.969 180.909H202.151L199.141 189.034C199.006 189.4 198.838 189.703 198.638 189.944C198.438 190.187 198.205 190.367 197.941 190.484C197.679 190.601 197.384 190.659 197.054 190.659ZM208.612 182.497L207.633 182.774C207.571 182.611 207.481 182.453 207.361 182.299C207.244 182.142 207.084 182.012 206.881 181.911C206.677 181.809 206.417 181.759 206.1 181.759C205.666 181.759 205.305 181.859 205.015 182.059C204.729 182.256 204.586 182.506 204.586 182.811C204.586 183.082 204.685 183.296 204.882 183.453C205.079 183.61 205.386 183.741 205.805 183.845L206.857 184.104C207.491 184.258 207.964 184.493 208.275 184.81C208.586 185.124 208.741 185.529 208.741 186.024C208.741 186.43 208.624 186.794 208.39 187.114C208.159 187.434 207.836 187.686 207.421 187.871C207.005 188.055 206.522 188.148 205.971 188.148C205.248 188.148 204.649 187.991 204.175 187.677C203.701 187.363 203.401 186.904 203.275 186.301L204.309 186.043C204.408 186.424 204.594 186.71 204.868 186.901C205.145 187.092 205.506 187.188 205.953 187.188C206.46 187.188 206.864 187.08 207.162 186.864C207.464 186.646 207.615 186.384 207.615 186.08C207.615 185.833 207.528 185.627 207.356 185.461C207.184 185.292 206.919 185.165 206.562 185.082L205.38 184.805C204.731 184.652 204.254 184.413 203.949 184.09C203.647 183.764 203.497 183.356 203.497 182.866C203.497 182.466 203.609 182.112 203.834 181.805C204.061 181.497 204.371 181.255 204.762 181.08C205.155 180.904 205.602 180.817 206.1 180.817C206.802 180.817 207.353 180.971 207.753 181.278C208.156 181.586 208.442 181.992 208.612 182.497ZM216.124 188.166C215.675 188.166 215.267 188.082 214.9 187.912C214.534 187.74 214.243 187.492 214.028 187.169C213.813 186.843 213.705 186.449 213.705 185.987C213.705 185.581 213.785 185.252 213.945 184.999C214.105 184.744 214.319 184.544 214.587 184.399C214.854 184.254 215.15 184.147 215.473 184.076C215.799 184.002 216.127 183.944 216.456 183.901C216.887 183.845 217.236 183.804 217.504 183.776C217.775 183.745 217.972 183.694 218.095 183.624C218.221 183.553 218.284 183.43 218.284 183.254V183.217C218.284 182.762 218.16 182.408 217.91 182.156C217.664 181.903 217.29 181.777 216.789 181.777C216.268 181.777 215.861 181.891 215.565 182.119C215.27 182.346 215.062 182.589 214.942 182.848L213.908 182.479C214.093 182.048 214.339 181.712 214.647 181.472C214.957 181.229 215.296 181.06 215.662 180.964C216.032 180.866 216.395 180.817 216.752 180.817C216.979 180.817 217.241 180.844 217.536 180.9C217.835 180.952 218.123 181.061 218.4 181.228C218.68 181.394 218.912 181.645 219.097 181.98C219.282 182.316 219.374 182.765 219.374 183.328V188H218.284V187.04H218.229C218.155 187.194 218.032 187.358 217.86 187.534C217.687 187.709 217.458 187.858 217.172 187.982C216.886 188.105 216.536 188.166 216.124 188.166ZM216.29 187.188C216.721 187.188 217.084 187.103 217.38 186.934C217.678 186.764 217.903 186.546 218.054 186.278C218.207 186.01 218.284 185.729 218.284 185.433V184.436C218.238 184.491 218.137 184.542 217.98 184.588C217.826 184.632 217.647 184.67 217.444 184.704C217.244 184.735 217.049 184.762 216.858 184.787C216.67 184.808 216.518 184.827 216.401 184.842C216.118 184.879 215.853 184.939 215.607 185.022C215.364 185.102 215.167 185.224 215.016 185.387C214.868 185.547 214.794 185.766 214.794 186.043C214.794 186.421 214.934 186.707 215.214 186.901C215.498 187.092 215.856 187.188 216.29 187.188ZM224.225 190.807C223.698 190.807 223.246 190.739 222.867 190.604C222.489 190.471 222.173 190.296 221.921 190.077C221.672 189.862 221.473 189.631 221.325 189.385L222.193 188.776C222.292 188.905 222.416 189.053 222.567 189.219C222.718 189.388 222.924 189.534 223.186 189.657C223.451 189.783 223.797 189.847 224.225 189.847C224.797 189.847 225.269 189.708 225.642 189.431C226.014 189.154 226.2 188.72 226.2 188.129V186.689H226.108C226.028 186.818 225.914 186.978 225.767 187.169C225.622 187.357 225.413 187.525 225.139 187.672C224.868 187.817 224.502 187.889 224.04 187.889C223.468 187.889 222.954 187.754 222.498 187.483C222.046 187.212 221.687 186.818 221.422 186.301C221.161 185.784 221.03 185.156 221.03 184.418C221.03 183.691 221.158 183.059 221.413 182.52C221.669 181.979 222.024 181.56 222.48 181.265C222.935 180.966 223.461 180.817 224.058 180.817C224.52 180.817 224.886 180.894 225.157 181.048C225.431 181.198 225.64 181.371 225.785 181.565C225.933 181.755 226.047 181.912 226.127 182.036H226.237V180.909H227.29V188.203C227.29 188.812 227.151 189.308 226.874 189.69C226.601 190.074 226.231 190.356 225.767 190.534C225.305 190.716 224.791 190.807 224.225 190.807ZM224.188 186.911C224.625 186.911 224.994 186.81 225.296 186.61C225.597 186.41 225.827 186.123 225.983 185.747C226.14 185.372 226.219 184.922 226.219 184.399C226.219 183.888 226.142 183.437 225.988 183.047C225.834 182.656 225.606 182.349 225.305 182.128C225.003 181.906 224.631 181.795 224.188 181.795C223.726 181.795 223.341 181.912 223.034 182.146C222.729 182.38 222.5 182.694 222.346 183.088C222.195 183.482 222.119 183.919 222.119 184.399C222.119 184.892 222.196 185.327 222.35 185.706C222.507 186.081 222.738 186.377 223.043 186.592C223.351 186.804 223.732 186.911 224.188 186.911ZM232.165 188.148C231.525 188.148 230.963 187.995 230.48 187.691C230 187.386 229.624 186.96 229.354 186.412C229.086 185.864 228.952 185.224 228.952 184.491C228.952 183.753 229.086 183.108 229.354 182.557C229.624 182.006 230 181.578 230.48 181.274C230.963 180.969 231.525 180.817 232.165 180.817C232.805 180.817 233.365 180.969 233.845 181.274C234.329 181.578 234.704 182.006 234.972 182.557C235.243 183.108 235.378 183.753 235.378 184.491C235.378 185.224 235.243 185.864 234.972 186.412C234.704 186.96 234.329 187.386 233.845 187.691C233.365 187.995 232.805 188.148 232.165 188.148ZM232.165 187.169C232.651 187.169 233.051 187.044 233.365 186.795C233.679 186.546 233.912 186.218 234.062 185.812C234.213 185.406 234.289 184.965 234.289 184.491C234.289 184.018 234.213 183.576 234.062 183.167C233.912 182.757 233.679 182.426 233.365 182.174C233.051 181.922 232.651 181.795 232.165 181.795C231.679 181.795 231.279 181.922 230.965 182.174C230.651 182.426 230.418 182.757 230.268 183.167C230.117 183.576 230.041 184.018 230.041 184.491C230.041 184.965 230.117 185.406 230.268 185.812C230.418 186.218 230.651 186.546 230.965 186.795C231.279 187.044 231.679 187.169 232.165 187.169ZM240.845 188V178.545H241.935V182.036H242.027C242.107 181.912 242.218 181.755 242.359 181.565C242.504 181.371 242.71 181.198 242.978 181.048C243.249 180.894 243.615 180.817 244.077 180.817C244.674 180.817 245.2 180.966 245.655 181.265C246.111 181.563 246.466 181.986 246.722 182.534C246.977 183.082 247.105 183.728 247.105 184.473C247.105 185.224 246.977 185.875 246.722 186.426C246.466 186.974 246.112 187.398 245.66 187.7C245.208 187.998 244.686 188.148 244.095 188.148C243.64 188.148 243.275 188.072 243.001 187.922C242.727 187.768 242.516 187.594 242.369 187.4C242.221 187.203 242.107 187.04 242.027 186.911H241.898V188H240.845ZM241.916 184.455C241.916 184.99 241.995 185.462 242.152 185.872C242.309 186.278 242.538 186.597 242.839 186.827C243.141 187.055 243.51 187.169 243.947 187.169C244.403 187.169 244.783 187.049 245.088 186.809C245.395 186.566 245.626 186.24 245.78 185.83C245.937 185.418 246.016 184.959 246.016 184.455C246.016 183.956 245.939 183.507 245.785 183.107C245.634 182.703 245.405 182.385 245.097 182.151C244.792 181.914 244.409 181.795 243.947 181.795C243.504 181.795 243.132 181.908 242.83 182.132C242.529 182.354 242.301 182.665 242.147 183.065C241.993 183.462 241.916 183.925 241.916 184.455ZM249.219 190.659C249.035 190.659 248.87 190.644 248.725 190.613C248.581 190.585 248.481 190.558 248.425 190.53L248.702 189.57C248.967 189.637 249.201 189.662 249.404 189.643C249.607 189.625 249.787 189.534 249.944 189.371C250.104 189.211 250.25 188.951 250.383 188.591L250.586 188.037L247.964 180.909H249.146L251.103 186.56H251.177L253.134 180.909H254.316L251.306 189.034C251.171 189.4 251.003 189.703 250.803 189.944C250.603 190.187 250.37 190.367 250.106 190.484C249.844 190.601 249.549 190.659 249.219 190.659ZM264.858 189.108C263.916 189.108 263.083 188.979 262.36 188.72C261.637 188.465 261.029 188.088 260.537 187.589C260.044 187.091 259.672 186.48 259.419 185.756C259.167 185.033 259.041 184.205 259.041 183.273C259.041 182.371 259.169 181.565 259.424 180.854C259.683 180.143 260.057 179.54 260.546 179.044C261.038 178.545 261.635 178.165 262.337 177.904C263.042 177.642 263.839 177.511 264.728 177.511C265.593 177.511 266.35 177.653 267 177.936C267.652 178.216 268.197 178.596 268.634 179.076C269.074 179.553 269.403 180.09 269.622 180.688C269.843 181.285 269.954 181.9 269.954 182.534C269.954 182.98 269.933 183.433 269.89 183.891C269.847 184.35 269.756 184.772 269.617 185.156C269.479 185.538 269.265 185.846 268.976 186.08C268.689 186.313 268.302 186.43 267.812 186.43C267.597 186.43 267.36 186.397 267.101 186.329C266.843 186.261 266.613 186.149 266.413 185.992C266.213 185.835 266.095 185.624 266.058 185.359H266.003C265.929 185.538 265.815 185.707 265.661 185.867C265.51 186.027 265.312 186.155 265.065 186.25C264.822 186.346 264.525 186.387 264.174 186.375C263.774 186.36 263.422 186.27 263.117 186.107C262.813 185.941 262.557 185.716 262.351 185.433C262.148 185.147 261.994 184.816 261.889 184.441C261.788 184.062 261.737 183.654 261.737 183.217C261.737 182.802 261.799 182.422 261.922 182.077C262.045 181.732 262.216 181.431 262.434 181.172C262.656 180.914 262.914 180.708 263.21 180.554C263.508 180.397 263.83 180.3 264.174 180.263C264.482 180.232 264.762 180.246 265.015 180.304C265.267 180.36 265.475 180.444 265.638 180.558C265.801 180.669 265.904 180.792 265.947 180.928H266.003V180.411H266.981V184.584C266.981 184.842 267.054 185.07 267.198 185.267C267.343 185.464 267.554 185.562 267.831 185.562C268.145 185.562 268.385 185.455 268.551 185.239C268.72 185.024 268.836 184.692 268.897 184.242C268.962 183.793 268.994 183.217 268.994 182.516C268.994 182.103 268.937 181.697 268.823 181.297C268.712 180.894 268.543 180.517 268.315 180.166C268.091 179.815 267.806 179.506 267.461 179.238C267.117 178.97 266.712 178.761 266.247 178.61C265.786 178.456 265.261 178.379 264.673 178.379C263.95 178.379 263.302 178.492 262.729 178.716C262.16 178.938 261.675 179.263 261.275 179.69C260.878 180.115 260.575 180.632 260.366 181.241C260.16 181.848 260.057 182.537 260.057 183.31C260.057 184.094 260.16 184.792 260.366 185.401C260.575 186.01 260.883 186.524 261.289 186.943C261.698 187.361 262.205 187.68 262.808 187.898C263.411 188.114 264.107 188.222 264.895 188.222C265.233 188.222 265.567 188.189 265.896 188.125C266.226 188.06 266.517 187.989 266.769 187.912C267.021 187.835 267.203 187.778 267.314 187.741L267.572 188.591C267.381 188.671 267.132 188.751 266.824 188.831C266.52 188.911 266.193 188.977 265.846 189.029C265.501 189.082 265.172 189.108 264.858 189.108ZM264.322 185.433C264.735 185.433 265.069 185.35 265.324 185.184C265.579 185.018 265.766 184.767 265.883 184.431C265.999 184.096 266.058 183.673 266.058 183.162C266.058 182.645 265.993 182.242 265.864 181.952C265.735 181.663 265.544 181.46 265.292 181.343C265.039 181.226 264.728 181.168 264.359 181.168C264.008 181.168 263.708 181.26 263.459 181.445C263.213 181.626 263.023 181.869 262.891 182.174C262.762 182.476 262.697 182.805 262.697 183.162C262.697 183.556 262.749 183.927 262.854 184.275C262.959 184.619 263.13 184.899 263.367 185.115C263.604 185.327 263.922 185.433 264.322 185.433ZM276.903 180.909C276.848 180.441 276.623 180.078 276.229 179.82C275.835 179.561 275.352 179.432 274.78 179.432C274.361 179.432 273.995 179.5 273.681 179.635C273.37 179.77 273.127 179.957 272.952 180.194C272.779 180.431 272.693 180.7 272.693 181.001C272.693 181.254 272.753 181.471 272.873 181.652C272.996 181.831 273.153 181.98 273.344 182.1C273.535 182.217 273.735 182.314 273.944 182.391C274.153 182.465 274.346 182.525 274.521 182.571L275.481 182.83C275.728 182.894 276.001 182.983 276.303 183.097C276.608 183.211 276.899 183.367 277.176 183.564C277.456 183.757 277.686 184.007 277.868 184.311C278.05 184.616 278.14 184.99 278.14 185.433C278.14 185.944 278.007 186.406 277.739 186.818C277.474 187.231 277.086 187.558 276.575 187.801C276.068 188.045 275.451 188.166 274.724 188.166C274.047 188.166 273.461 188.057 272.965 187.838C272.473 187.62 272.085 187.315 271.802 186.924C271.522 186.533 271.363 186.08 271.327 185.562H272.508C272.539 185.92 272.659 186.215 272.868 186.449C273.081 186.68 273.349 186.852 273.672 186.966C273.998 187.077 274.349 187.132 274.724 187.132C275.161 187.132 275.554 187.061 275.901 186.92C276.249 186.775 276.525 186.575 276.728 186.32C276.931 186.061 277.032 185.759 277.032 185.415C277.032 185.101 276.945 184.845 276.769 184.648C276.594 184.451 276.363 184.291 276.077 184.168C275.791 184.045 275.481 183.937 275.149 183.845L273.986 183.513C273.247 183.3 272.662 182.997 272.231 182.603C271.8 182.209 271.585 181.694 271.585 181.057C271.585 180.527 271.728 180.066 272.014 179.672C272.304 179.275 272.691 178.967 273.178 178.749C273.667 178.527 274.213 178.416 274.817 178.416C275.426 178.416 275.968 178.525 276.442 178.744C276.916 178.959 277.291 179.255 277.568 179.63C277.848 180.006 277.996 180.432 278.011 180.909H276.903ZM279.875 190.659V180.909H280.928V182.036H281.057C281.137 181.912 281.248 181.755 281.389 181.565C281.534 181.371 281.74 181.198 282.008 181.048C282.279 180.894 282.645 180.817 283.107 180.817C283.704 180.817 284.23 180.966 284.685 181.265C285.141 181.563 285.496 181.986 285.752 182.534C286.007 183.082 286.135 183.728 286.135 184.473C286.135 185.224 286.007 185.875 285.752 186.426C285.496 186.974 285.142 187.398 284.69 187.7C284.238 187.998 283.716 188.148 283.125 188.148C282.67 188.148 282.305 188.072 282.031 187.922C281.757 187.768 281.546 187.594 281.399 187.4C281.251 187.203 281.137 187.04 281.057 186.911H280.965V190.659H279.875ZM280.946 184.455C280.946 184.99 281.025 185.462 281.182 185.872C281.339 186.278 281.568 186.597 281.869 186.827C282.171 187.055 282.54 187.169 282.977 187.169C283.433 187.169 283.813 187.049 284.118 186.809C284.425 186.566 284.656 186.24 284.81 185.83C284.967 185.418 285.046 184.959 285.046 184.455C285.046 183.956 284.969 183.507 284.815 183.107C284.664 182.703 284.435 182.385 284.127 182.151C283.822 181.914 283.439 181.795 282.977 181.795C282.534 181.795 282.162 181.908 281.86 182.132C281.559 182.354 281.331 182.665 281.177 183.065C281.023 183.462 280.946 183.925 280.946 184.455ZM289.884 188.166C289.434 188.166 289.026 188.082 288.66 187.912C288.294 187.74 288.003 187.492 287.788 187.169C287.572 186.843 287.465 186.449 287.465 185.987C287.465 185.581 287.545 185.252 287.705 184.999C287.865 184.744 288.079 184.544 288.346 184.399C288.614 184.254 288.91 184.147 289.233 184.076C289.559 184.002 289.887 183.944 290.216 183.901C290.647 183.845 290.996 183.804 291.264 183.776C291.535 183.745 291.732 183.694 291.855 183.624C291.981 183.553 292.044 183.43 292.044 183.254V183.217C292.044 182.762 291.919 182.408 291.67 182.156C291.424 181.903 291.05 181.777 290.548 181.777C290.028 181.777 289.62 181.891 289.325 182.119C289.03 182.346 288.822 182.589 288.702 182.848L287.668 182.479C287.852 182.048 288.099 181.712 288.406 181.472C288.717 181.229 289.056 181.06 289.422 180.964C289.791 180.866 290.154 180.817 290.511 180.817C290.739 180.817 291.001 180.844 291.296 180.9C291.595 180.952 291.883 181.061 292.16 181.228C292.44 181.394 292.672 181.645 292.857 181.98C293.041 182.316 293.134 182.765 293.134 183.328V188H292.044V187.04H291.989C291.915 187.194 291.792 187.358 291.619 187.534C291.447 187.709 291.218 187.858 290.932 187.982C290.645 188.105 290.296 188.166 289.884 188.166ZM290.05 187.188C290.481 187.188 290.844 187.103 291.139 186.934C291.438 186.764 291.662 186.546 291.813 186.278C291.967 186.01 292.044 185.729 292.044 185.433V184.436C291.998 184.491 291.896 184.542 291.739 184.588C291.586 184.632 291.407 184.67 291.204 184.704C291.004 184.735 290.808 184.762 290.618 184.787C290.43 184.808 290.278 184.827 290.161 184.842C289.877 184.879 289.613 184.939 289.367 185.022C289.123 185.102 288.926 185.224 288.776 185.387C288.628 185.547 288.554 185.766 288.554 186.043C288.554 186.421 288.694 186.707 288.974 186.901C289.257 187.092 289.616 187.188 290.05 187.188ZM298.003 188.148C297.338 188.148 296.766 187.991 296.286 187.677C295.805 187.363 295.436 186.931 295.178 186.38C294.919 185.829 294.79 185.199 294.79 184.491C294.79 183.771 294.922 183.136 295.187 182.585C295.455 182.031 295.827 181.598 296.304 181.288C296.784 180.974 297.344 180.817 297.984 180.817C298.483 180.817 298.932 180.909 299.332 181.094C299.732 181.278 300.06 181.537 300.316 181.869C300.571 182.202 300.73 182.589 300.791 183.033H299.702C299.619 182.71 299.434 182.423 299.148 182.174C298.865 181.922 298.483 181.795 298.003 181.795C297.578 181.795 297.206 181.906 296.886 182.128C296.569 182.346 296.321 182.656 296.142 183.056C295.967 183.453 295.879 183.919 295.879 184.455C295.879 185.002 295.965 185.479 296.138 185.886C296.313 186.292 296.559 186.607 296.876 186.832C297.196 187.057 297.572 187.169 298.003 187.169C298.286 187.169 298.543 187.12 298.774 187.021C299.005 186.923 299.2 186.781 299.36 186.597C299.52 186.412 299.634 186.19 299.702 185.932H300.791C300.73 186.35 300.577 186.727 300.334 187.063C300.094 187.395 299.776 187.66 299.379 187.857C298.985 188.051 298.526 188.148 298.003 188.148ZM305.357 188.148C304.674 188.148 304.084 187.997 303.589 187.695C303.096 187.391 302.716 186.966 302.449 186.421C302.184 185.873 302.051 185.236 302.051 184.51C302.051 183.784 302.184 183.143 302.449 182.589C302.716 182.032 303.089 181.598 303.566 181.288C304.046 180.974 304.606 180.817 305.246 180.817C305.615 180.817 305.98 180.878 306.34 181.001C306.7 181.125 307.028 181.325 307.324 181.602C307.619 181.875 307.854 182.239 308.03 182.691C308.205 183.143 308.293 183.701 308.293 184.362V184.824H302.827V183.882H307.185C307.185 183.482 307.105 183.125 306.945 182.811C306.788 182.497 306.563 182.249 306.271 182.068C305.982 181.886 305.64 181.795 305.246 181.795C304.812 181.795 304.437 181.903 304.12 182.119C303.806 182.331 303.564 182.608 303.395 182.95C303.226 183.291 303.141 183.657 303.141 184.048V184.676C303.141 185.212 303.233 185.666 303.418 186.038C303.606 186.407 303.866 186.689 304.198 186.883C304.531 187.074 304.917 187.169 305.357 187.169C305.643 187.169 305.902 187.129 306.132 187.049C306.366 186.966 306.568 186.843 306.737 186.68C306.906 186.513 307.037 186.307 307.13 186.061L308.182 186.357C308.071 186.714 307.885 187.027 307.624 187.298C307.362 187.566 307.039 187.775 306.654 187.926C306.269 188.074 305.837 188.148 305.357 188.148ZM310.098 178.545H311.464L314.678 186.393H314.788L318.001 178.545H319.368V188H318.297V180.817H318.205L315.25 188H314.216L311.261 180.817H311.169V188H310.098V178.545ZM324.489 188.148C323.805 188.148 323.216 187.997 322.721 187.695C322.228 187.391 321.848 186.966 321.58 186.421C321.316 185.873 321.183 185.236 321.183 184.51C321.183 183.784 321.316 183.143 321.58 182.589C321.848 182.032 322.22 181.598 322.698 181.288C323.178 180.974 323.738 180.817 324.378 180.817C324.747 180.817 325.112 180.878 325.472 181.001C325.832 181.125 326.16 181.325 326.455 181.602C326.751 181.875 326.986 182.239 327.162 182.691C327.337 183.143 327.425 183.701 327.425 184.362V184.824H321.959V183.882H326.317C326.317 183.482 326.237 183.125 326.077 182.811C325.92 182.497 325.695 182.249 325.403 182.068C325.113 181.886 324.772 181.795 324.378 181.795C323.944 181.795 323.569 181.903 323.252 182.119C322.938 182.331 322.696 182.608 322.527 182.95C322.357 183.291 322.273 183.657 322.273 184.048V184.676C322.273 185.212 322.365 185.666 322.55 186.038C322.738 186.407 322.998 186.689 323.33 186.883C323.662 187.074 324.049 187.169 324.489 187.169C324.775 187.169 325.033 187.129 325.264 187.049C325.498 186.966 325.7 186.843 325.869 186.68C326.038 186.513 326.169 186.307 326.261 186.061L327.314 186.357C327.203 186.714 327.017 187.027 326.755 187.298C326.494 187.566 326.171 187.775 325.786 187.926C325.401 188.074 324.969 188.148 324.489 188.148ZM329.082 188V180.909H330.135V181.98H330.209C330.338 181.629 330.572 181.345 330.91 181.126C331.249 180.908 331.63 180.798 332.055 180.798C332.135 180.798 332.235 180.8 332.355 180.803C332.475 180.806 332.566 180.811 332.628 180.817V181.925C332.591 181.915 332.506 181.902 332.374 181.883C332.244 181.862 332.107 181.851 331.963 181.851C331.618 181.851 331.31 181.923 331.04 182.068C330.772 182.209 330.559 182.406 330.402 182.659C330.249 182.908 330.172 183.193 330.172 183.513V188H329.082ZM335.009 178.545V188H333.919V178.545H335.009ZM337.004 188V180.909H338.093V188H337.004ZM337.558 179.727C337.346 179.727 337.162 179.655 337.009 179.51C336.858 179.366 336.782 179.192 336.782 178.989C336.782 178.786 336.858 178.612 337.009 178.467C337.162 178.322 337.346 178.25 337.558 178.25C337.77 178.25 337.952 178.322 338.103 178.467C338.257 178.612 338.334 178.786 338.334 178.989C338.334 179.192 338.257 179.366 338.103 179.51C337.952 179.655 337.77 179.727 337.558 179.727ZM341.178 183.734V188H340.089V180.909H341.142V182.017H341.234C341.4 181.657 341.652 181.368 341.991 181.149C342.329 180.928 342.767 180.817 343.302 180.817C343.782 180.817 344.202 180.915 344.562 181.112C344.922 181.306 345.202 181.602 345.403 181.999C345.603 182.393 345.703 182.891 345.703 183.494V188H344.613V183.568C344.613 183.011 344.468 182.577 344.179 182.266C343.89 181.952 343.493 181.795 342.988 181.795C342.64 181.795 342.329 181.871 342.056 182.022C341.785 182.172 341.571 182.393 341.414 182.682C341.257 182.971 341.178 183.322 341.178 183.734ZM350.87 188.129C350.26 188.129 349.717 188.025 349.24 187.815C348.766 187.606 348.389 187.315 348.109 186.943C347.832 186.567 347.681 186.132 347.657 185.636H348.82C348.844 185.941 348.949 186.204 349.134 186.426C349.318 186.644 349.56 186.814 349.859 186.934C350.157 187.054 350.488 187.114 350.851 187.114C351.257 187.114 351.617 187.043 351.931 186.901C352.245 186.76 352.492 186.563 352.67 186.31C352.849 186.058 352.938 185.766 352.938 185.433C352.938 185.085 352.852 184.779 352.679 184.515C352.507 184.247 352.255 184.038 351.922 183.887C351.59 183.736 351.184 183.661 350.703 183.661H349.946V182.645H350.703C351.079 182.645 351.408 182.577 351.691 182.442C351.978 182.306 352.201 182.116 352.361 181.869C352.524 181.623 352.605 181.334 352.605 181.001C352.605 180.681 352.535 180.403 352.393 180.166C352.251 179.929 352.051 179.744 351.793 179.612C351.537 179.48 351.236 179.413 350.888 179.413C350.562 179.413 350.254 179.473 349.965 179.593C349.679 179.71 349.445 179.881 349.263 180.106C349.081 180.327 348.983 180.595 348.968 180.909H347.86C347.878 180.414 348.027 179.98 348.307 179.607C348.588 179.232 348.954 178.939 349.406 178.73C349.862 178.521 350.362 178.416 350.907 178.416C351.491 178.416 351.993 178.535 352.411 178.772C352.83 179.006 353.152 179.315 353.376 179.7C353.601 180.084 353.713 180.5 353.713 180.946C353.713 181.478 353.573 181.932 353.293 182.308C353.016 182.683 352.639 182.943 352.162 183.088V183.162C352.759 183.26 353.226 183.514 353.561 183.924C353.896 184.33 354.064 184.833 354.064 185.433C354.064 185.947 353.924 186.409 353.644 186.818C353.367 187.224 352.989 187.545 352.508 187.778C352.028 188.012 351.482 188.129 350.87 188.129ZM359.147 188.129C358.538 188.129 357.994 188.025 357.517 187.815C357.043 187.606 356.666 187.315 356.386 186.943C356.109 186.567 355.958 186.132 355.934 185.636H357.097C357.122 185.941 357.226 186.204 357.411 186.426C357.596 186.644 357.837 186.814 358.136 186.934C358.434 187.054 358.765 187.114 359.128 187.114C359.535 187.114 359.895 187.043 360.209 186.901C360.523 186.76 360.769 186.563 360.947 186.31C361.126 186.058 361.215 185.766 361.215 185.433C361.215 185.085 361.129 184.779 360.957 184.515C360.784 184.247 360.532 184.038 360.199 183.887C359.867 183.736 359.461 183.661 358.981 183.661H358.224V182.645H358.981C359.356 182.645 359.686 182.577 359.969 182.442C360.255 182.306 360.478 182.116 360.638 181.869C360.801 181.623 360.883 181.334 360.883 181.001C360.883 180.681 360.812 180.403 360.67 180.166C360.529 179.929 360.329 179.744 360.07 179.612C359.815 179.48 359.513 179.413 359.165 179.413C358.839 179.413 358.531 179.473 358.242 179.593C357.956 179.71 357.722 179.881 357.54 180.106C357.359 180.327 357.26 180.595 357.245 180.909H356.137C356.155 180.414 356.305 179.98 356.585 179.607C356.865 179.232 357.231 178.939 357.684 178.73C358.139 178.521 358.639 178.416 359.184 178.416C359.769 178.416 360.27 178.535 360.689 178.772C361.107 179.006 361.429 179.315 361.654 179.7C361.878 180.084 361.991 180.5 361.991 180.946C361.991 181.478 361.851 181.932 361.571 182.308C361.294 182.683 360.917 182.943 360.44 183.088V183.162C361.037 183.26 361.503 183.514 361.838 183.924C362.174 184.33 362.342 184.833 362.342 185.433C362.342 185.947 362.201 186.409 361.921 186.818C361.644 187.224 361.266 187.545 360.786 187.778C360.306 188.012 359.759 188.129 359.147 188.129Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="row-2-cs-count" opacity="0.7" d="M386.828 168V167.297L389.469 164.406C389.779 164.068 390.034 163.773 390.234 163.523C390.435 163.271 390.583 163.034 390.68 162.812C390.779 162.589 390.828 162.354 390.828 162.109C390.828 161.828 390.76 161.585 390.625 161.379C390.492 161.173 390.31 161.014 390.078 160.902C389.846 160.79 389.586 160.734 389.297 160.734C388.99 160.734 388.721 160.798 388.492 160.926C388.266 161.051 388.09 161.227 387.965 161.453C387.842 161.68 387.781 161.945 387.781 162.25H386.859C386.859 161.781 386.967 161.37 387.184 161.016C387.4 160.661 387.694 160.385 388.066 160.187C388.441 159.99 388.862 159.891 389.328 159.891C389.797 159.891 390.212 159.99 390.574 160.187C390.936 160.385 391.22 160.652 391.426 160.988C391.632 161.324 391.734 161.698 391.734 162.109C391.734 162.404 391.681 162.691 391.574 162.973C391.47 163.251 391.288 163.562 391.027 163.906C390.77 164.247 390.411 164.664 389.953 165.156L388.156 167.078V167.141H391.875V168H386.828Z" fill="var(--vscode-quickInput-foreground)"/>
<g id="row-2-cs-icon-clip" clip-path="url(#clip2_46_2)">
<path id="row-2-cs-icon" opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M379.468 155.556L379.947 156.088V159.594L378.988 158.641V156.568H367.006V164.556H369.456L369.988 165.088V166.846L372.119 164.716L372.491 164.556H373.033L374.035 165.568H372.704L369.829 168.444L368.976 168.071V165.568H366.473L365.994 165.088V156.088L366.473 155.556H379.468ZM376.079 159.55L376.797 160.324L374.089 163.031L376.797 165.795L376.079 166.513L372.984 163.418V162.7L376.079 159.55ZM382.006 162.7L378.911 159.55L378.137 160.324L380.901 163.031L378.137 165.795L378.911 166.513L382.006 163.418V162.7Z" fill="var(--vscode-quickInput-foreground)"/>
</g>
<path id="row-2-repo" opacity="0.7" d="M200.266 170.375C199.82 170.375 199.438 170.318 199.117 170.203C198.797 170.091 198.53 169.943 198.316 169.758C198.105 169.576 197.938 169.38 197.813 169.172L198.547 168.656C198.63 168.766 198.736 168.891 198.863 169.031C198.991 169.174 199.165 169.298 199.387 169.402C199.611 169.509 199.904 169.562 200.266 169.562C200.75 169.562 201.15 169.445 201.465 169.211C201.78 168.977 201.938 168.609 201.938 168.109V166.891H201.859C201.792 167 201.695 167.135 201.57 167.297C201.448 167.456 201.271 167.598 201.039 167.723C200.81 167.845 200.5 167.906 200.109 167.906C199.625 167.906 199.19 167.792 198.805 167.563C198.422 167.333 198.118 167 197.895 166.562C197.673 166.125 197.563 165.594 197.563 164.969C197.563 164.354 197.671 163.819 197.887 163.363C198.103 162.905 198.404 162.551 198.789 162.301C199.174 162.048 199.62 161.922 200.125 161.922C200.516 161.922 200.826 161.987 201.055 162.117C201.286 162.245 201.464 162.391 201.586 162.555C201.711 162.716 201.807 162.849 201.875 162.953H201.969V162H202.859V168.172C202.859 168.688 202.742 169.107 202.508 169.43C202.276 169.755 201.964 169.993 201.57 170.145C201.18 170.298 200.745 170.375 200.266 170.375ZM200.234 167.078C200.604 167.078 200.917 166.993 201.172 166.824C201.427 166.655 201.621 166.411 201.754 166.094C201.887 165.776 201.953 165.396 201.953 164.953C201.953 164.521 201.888 164.139 201.758 163.809C201.628 163.478 201.435 163.219 201.18 163.031C200.924 162.844 200.609 162.75 200.234 162.75C199.844 162.75 199.518 162.849 199.258 163.047C199 163.245 198.806 163.51 198.676 163.844C198.548 164.177 198.484 164.547 198.484 164.953C198.484 165.37 198.549 165.738 198.68 166.059C198.813 166.376 199.008 166.626 199.266 166.809C199.526 166.988 199.849 167.078 200.234 167.078ZM204.547 168V162H205.469V168H204.547ZM205.016 161C204.836 161 204.681 160.939 204.551 160.816C204.423 160.694 204.359 160.547 204.359 160.375C204.359 160.203 204.423 160.056 204.551 159.934C204.681 159.811 204.836 159.75 205.016 159.75C205.195 159.75 205.349 159.811 205.477 159.934C205.607 160.056 205.672 160.203 205.672 160.375C205.672 160.547 205.607 160.694 205.477 160.816C205.349 160.939 205.195 161 205.016 161ZM209.767 162V162.781H206.657V162H209.767ZM207.563 160.562H208.485V166.281C208.485 166.542 208.523 166.737 208.599 166.867C208.677 166.995 208.776 167.081 208.896 167.125C209.018 167.167 209.147 167.187 209.282 167.187C209.384 167.187 209.467 167.182 209.532 167.172C209.597 167.159 209.649 167.148 209.688 167.141L209.876 167.969C209.813 167.992 209.726 168.016 209.614 168.039C209.502 168.065 209.36 168.078 209.188 168.078C208.928 168.078 208.673 168.022 208.423 167.91C208.175 167.798 207.97 167.628 207.806 167.398C207.644 167.169 207.563 166.88 207.563 166.531V160.562ZM212.142 165.812L212.126 164.672H212.313L214.938 162H216.079L213.282 164.828H213.204L212.142 165.812ZM211.282 168V160H212.204V168H211.282ZM215.095 168L212.751 165.031L213.407 164.391L216.267 168H215.095ZM217.266 168V162H218.156V162.906H218.219C218.328 162.609 218.526 162.368 218.813 162.184C219.099 161.999 219.422 161.906 219.781 161.906C219.849 161.906 219.934 161.908 220.035 161.91C220.137 161.913 220.214 161.917 220.266 161.922V162.859C220.234 162.852 220.163 162.84 220.051 162.824C219.941 162.806 219.826 162.797 219.703 162.797C219.411 162.797 219.151 162.858 218.922 162.98C218.695 163.1 218.516 163.267 218.383 163.48C218.253 163.691 218.188 163.932 218.188 164.203V168H217.266ZM223.124 168.141C222.744 168.141 222.399 168.069 222.089 167.926C221.779 167.78 221.533 167.57 221.351 167.297C221.168 167.021 221.077 166.687 221.077 166.297C221.077 165.953 221.145 165.674 221.28 165.461C221.416 165.245 221.597 165.076 221.823 164.953C222.05 164.831 222.3 164.74 222.573 164.68C222.849 164.617 223.127 164.568 223.405 164.531C223.77 164.484 224.065 164.449 224.292 164.426C224.521 164.4 224.688 164.357 224.792 164.297C224.899 164.237 224.952 164.133 224.952 163.984V163.953C224.952 163.568 224.847 163.268 224.636 163.055C224.427 162.841 224.111 162.734 223.687 162.734C223.246 162.734 222.901 162.831 222.651 163.023C222.401 163.216 222.226 163.422 222.124 163.641L221.249 163.328C221.405 162.964 221.614 162.68 221.874 162.477C222.137 162.271 222.424 162.128 222.733 162.047C223.046 161.964 223.353 161.922 223.655 161.922C223.848 161.922 224.069 161.945 224.319 161.992C224.572 162.036 224.815 162.129 225.05 162.27C225.287 162.41 225.483 162.622 225.64 162.906C225.796 163.19 225.874 163.57 225.874 164.047V168H224.952V167.187H224.905C224.843 167.318 224.739 167.457 224.593 167.605C224.447 167.754 224.253 167.88 224.011 167.984C223.769 168.089 223.473 168.141 223.124 168.141ZM223.265 167.312C223.629 167.312 223.937 167.241 224.187 167.098C224.439 166.954 224.629 166.77 224.757 166.543C224.887 166.316 224.952 166.078 224.952 165.828V164.984C224.913 165.031 224.827 165.074 224.694 165.113C224.564 165.15 224.413 165.182 224.241 165.211C224.072 165.237 223.907 165.26 223.745 165.281C223.586 165.299 223.457 165.315 223.358 165.328C223.119 165.359 222.895 165.41 222.687 165.48C222.481 165.548 222.314 165.651 222.187 165.789C222.062 165.924 221.999 166.109 221.999 166.344C221.999 166.664 222.118 166.906 222.354 167.07C222.594 167.232 222.897 167.312 223.265 167.312ZM228.416 165.812L228.4 164.672H228.588L231.213 162H232.354L229.557 164.828H229.479L228.416 165.812ZM227.557 168V160H228.479V168H227.557ZM231.369 168L229.025 165.031L229.682 164.391L232.541 168H231.369ZM235.809 168.125C235.23 168.125 234.732 167.997 234.312 167.742C233.896 167.484 233.574 167.125 233.348 166.664C233.124 166.201 233.012 165.661 233.012 165.047C233.012 164.432 233.124 163.891 233.348 163.422C233.574 162.951 233.889 162.583 234.293 162.32C234.699 162.055 235.173 161.922 235.715 161.922C236.027 161.922 236.336 161.974 236.641 162.078C236.945 162.182 237.223 162.352 237.473 162.586C237.723 162.818 237.922 163.125 238.07 163.508C238.219 163.891 238.293 164.362 238.293 164.922V165.312H233.668V164.516H237.355C237.355 164.177 237.288 163.875 237.152 163.609C237.02 163.344 236.829 163.134 236.582 162.98C236.337 162.827 236.048 162.75 235.715 162.75C235.348 162.75 235.03 162.841 234.762 163.023C234.496 163.203 234.292 163.437 234.148 163.727C234.005 164.016 233.934 164.326 233.934 164.656V165.188C233.934 165.641 234.012 166.025 234.168 166.34C234.327 166.652 234.547 166.891 234.828 167.055C235.109 167.216 235.436 167.297 235.809 167.297C236.051 167.297 236.27 167.263 236.465 167.195C236.663 167.125 236.833 167.021 236.977 166.883C237.12 166.742 237.23 166.568 237.309 166.359L238.199 166.609C238.105 166.911 237.948 167.177 237.727 167.406C237.505 167.633 237.232 167.81 236.906 167.937C236.581 168.063 236.215 168.125 235.809 168.125ZM240.617 164.391V168H239.695V162H240.586V162.937H240.664C240.805 162.633 241.018 162.388 241.305 162.203C241.591 162.016 241.961 161.922 242.414 161.922C242.82 161.922 243.176 162.005 243.48 162.172C243.785 162.336 244.022 162.586 244.191 162.922C244.361 163.255 244.445 163.677 244.445 164.188V168H243.523V164.25C243.523 163.779 243.401 163.411 243.156 163.148C242.911 162.883 242.576 162.75 242.148 162.75C241.854 162.75 241.591 162.814 241.359 162.941C241.13 163.069 240.949 163.255 240.816 163.5C240.684 163.745 240.617 164.042 240.617 164.391ZM248.958 159.625L246.38 169.203H245.536L248.114 159.625H248.958ZM254.957 162L252.738 168H251.801L249.582 162H250.582L252.238 166.781H252.301L253.957 162H254.957ZM260.424 163.344L259.596 163.578C259.544 163.44 259.467 163.306 259.365 163.176C259.266 163.043 259.131 162.934 258.959 162.848C258.787 162.762 258.567 162.719 258.299 162.719C257.932 162.719 257.626 162.803 257.381 162.973C257.139 163.139 257.018 163.352 257.018 163.609C257.018 163.839 257.101 164.02 257.268 164.152C257.434 164.285 257.695 164.396 258.049 164.484L258.939 164.703C259.476 164.833 259.876 165.033 260.139 165.301C260.402 165.566 260.533 165.909 260.533 166.328C260.533 166.672 260.434 166.979 260.236 167.25C260.041 167.521 259.768 167.734 259.416 167.891C259.064 168.047 258.656 168.125 258.189 168.125C257.577 168.125 257.071 167.992 256.67 167.727C256.269 167.461 256.015 167.073 255.908 166.562L256.783 166.344C256.867 166.667 257.024 166.909 257.256 167.07C257.49 167.232 257.796 167.312 258.174 167.312C258.604 167.312 258.945 167.221 259.197 167.039C259.452 166.854 259.58 166.633 259.58 166.375C259.58 166.167 259.507 165.992 259.361 165.852C259.215 165.708 258.992 165.602 258.689 165.531L257.689 165.297C257.14 165.167 256.736 164.965 256.479 164.691C256.223 164.415 256.096 164.07 256.096 163.656C256.096 163.318 256.191 163.018 256.381 162.758C256.574 162.497 256.835 162.293 257.166 162.145C257.499 161.996 257.877 161.922 258.299 161.922C258.893 161.922 259.359 162.052 259.697 162.312C260.038 162.573 260.281 162.917 260.424 163.344ZM264.358 168.125C263.796 168.125 263.312 167.992 262.905 167.727C262.499 167.461 262.187 167.095 261.968 166.629C261.749 166.163 261.64 165.63 261.64 165.031C261.64 164.422 261.752 163.884 261.976 163.418C262.202 162.949 262.517 162.583 262.921 162.32C263.327 162.055 263.801 161.922 264.343 161.922C264.765 161.922 265.145 162 265.483 162.156C265.822 162.312 266.099 162.531 266.315 162.812C266.532 163.094 266.666 163.422 266.718 163.797H265.796C265.726 163.523 265.569 163.281 265.327 163.07C265.088 162.857 264.765 162.75 264.358 162.75C263.999 162.75 263.684 162.844 263.413 163.031C263.145 163.216 262.935 163.478 262.784 163.816C262.636 164.152 262.562 164.547 262.562 165C262.562 165.464 262.634 165.867 262.78 166.211C262.929 166.555 263.137 166.822 263.405 167.012C263.676 167.202 263.994 167.297 264.358 167.297C264.598 167.297 264.815 167.255 265.011 167.172C265.206 167.089 265.371 166.969 265.507 166.812C265.642 166.656 265.739 166.469 265.796 166.25H266.718C266.666 166.604 266.537 166.923 266.331 167.207C266.128 167.488 265.858 167.712 265.522 167.879C265.189 168.043 264.801 168.125 264.358 168.125ZM270.503 168.125C269.961 168.125 269.486 167.996 269.077 167.738C268.671 167.48 268.353 167.12 268.124 166.656C267.897 166.193 267.784 165.651 267.784 165.031C267.784 164.406 267.897 163.861 268.124 163.395C268.353 162.928 268.671 162.566 269.077 162.309C269.486 162.051 269.961 161.922 270.503 161.922C271.045 161.922 271.519 162.051 271.925 162.309C272.334 162.566 272.651 162.928 272.878 163.395C273.107 163.861 273.222 164.406 273.222 165.031C273.222 165.651 273.107 166.193 272.878 166.656C272.651 167.12 272.334 167.48 271.925 167.738C271.519 167.996 271.045 168.125 270.503 168.125ZM270.503 167.297C270.914 167.297 271.253 167.191 271.519 166.98C271.784 166.77 271.981 166.492 272.108 166.148C272.236 165.805 272.3 165.432 272.3 165.031C272.3 164.63 272.236 164.257 272.108 163.91C271.981 163.564 271.784 163.284 271.519 163.07C271.253 162.857 270.914 162.75 270.503 162.75C270.091 162.75 269.753 162.857 269.487 163.07C269.222 163.284 269.025 163.564 268.897 163.91C268.77 164.257 268.706 164.63 268.706 165.031C268.706 165.432 268.77 165.805 268.897 166.148C269.025 166.492 269.222 166.77 269.487 166.98C269.753 167.191 270.091 167.297 270.503 167.297ZM276.895 168.125C276.395 168.125 275.953 167.999 275.57 167.746C275.188 167.491 274.888 167.132 274.672 166.668C274.456 166.202 274.348 165.651 274.348 165.016C274.348 164.385 274.456 163.839 274.672 163.375C274.888 162.911 275.189 162.553 275.574 162.301C275.96 162.048 276.405 161.922 276.91 161.922C277.301 161.922 277.609 161.987 277.836 162.117C278.065 162.245 278.24 162.391 278.359 162.555C278.482 162.716 278.577 162.849 278.645 162.953H278.723V160H279.645V168H278.754V167.078H278.645C278.577 167.187 278.48 167.326 278.355 167.492C278.23 167.656 278.052 167.803 277.82 167.934C277.589 168.061 277.28 168.125 276.895 168.125ZM277.02 167.297C277.389 167.297 277.702 167.201 277.957 167.008C278.212 166.812 278.406 166.543 278.539 166.199C278.672 165.853 278.738 165.453 278.738 165C278.738 164.552 278.673 164.16 278.543 163.824C278.413 163.486 278.22 163.223 277.965 163.035C277.71 162.845 277.395 162.75 277.02 162.75C276.629 162.75 276.303 162.85 276.043 163.051C275.785 163.249 275.591 163.518 275.461 163.859C275.333 164.198 275.27 164.578 275.27 165C275.27 165.427 275.335 165.815 275.465 166.164C275.598 166.51 275.793 166.786 276.051 166.992C276.311 167.195 276.634 167.297 277.02 167.297ZM283.977 168.125C283.398 168.125 282.9 167.997 282.48 167.742C282.064 167.484 281.742 167.125 281.516 166.664C281.292 166.201 281.18 165.661 281.18 165.047C281.18 164.432 281.292 163.891 281.516 163.422C281.742 162.951 282.057 162.583 282.461 162.32C282.867 162.055 283.341 161.922 283.883 161.922C284.195 161.922 284.504 161.974 284.809 162.078C285.113 162.182 285.391 162.352 285.641 162.586C285.891 162.818 286.09 163.125 286.238 163.508C286.387 163.891 286.461 164.362 286.461 164.922V165.312H281.836V164.516H285.523C285.523 164.177 285.456 163.875 285.32 163.609C285.188 163.344 284.997 163.134 284.75 162.98C284.505 162.827 284.216 162.75 283.883 162.75C283.516 162.75 283.198 162.841 282.93 163.023C282.664 163.203 282.46 163.437 282.316 163.727C282.173 164.016 282.102 164.326 282.102 164.656V165.188C282.102 165.641 282.18 166.025 282.336 166.34C282.495 166.652 282.715 166.891 282.996 167.055C283.277 167.216 283.604 167.297 283.977 167.297C284.219 167.297 284.438 167.263 284.633 167.195C284.831 167.125 285.001 167.021 285.145 166.883C285.288 166.742 285.398 166.568 285.477 166.359L286.367 166.609C286.273 166.911 286.116 167.177 285.895 167.406C285.673 167.633 285.4 167.81 285.074 167.937C284.749 168.063 284.383 168.125 283.977 168.125ZM291.301 164.141V165H287.801V164.141H291.301ZM295.345 170.375C294.899 170.375 294.517 170.318 294.196 170.203C293.876 170.091 293.609 169.943 293.396 169.758C293.185 169.576 293.017 169.38 292.892 169.172L293.626 168.656C293.709 168.766 293.815 168.891 293.942 169.031C294.07 169.174 294.244 169.298 294.466 169.402C294.69 169.509 294.983 169.562 295.345 169.562C295.829 169.562 296.229 169.445 296.544 169.211C296.859 168.977 297.017 168.609 297.017 168.109V166.891H296.938C296.871 167 296.774 167.135 296.649 167.297C296.527 167.456 296.35 167.598 296.118 167.723C295.889 167.845 295.579 167.906 295.188 167.906C294.704 167.906 294.269 167.792 293.884 167.563C293.501 167.333 293.198 167 292.974 166.562C292.752 166.125 292.642 165.594 292.642 164.969C292.642 164.354 292.75 163.819 292.966 163.363C293.182 162.905 293.483 162.551 293.868 162.301C294.254 162.048 294.699 161.922 295.204 161.922C295.595 161.922 295.905 161.987 296.134 162.117C296.366 162.245 296.543 162.391 296.665 162.555C296.79 162.716 296.886 162.849 296.954 162.953H297.048V162H297.938V168.172C297.938 168.688 297.821 169.107 297.587 169.43C297.355 169.755 297.043 169.993 296.649 170.145C296.259 170.298 295.824 170.375 295.345 170.375ZM295.313 167.078C295.683 167.078 295.996 166.993 296.251 166.824C296.506 166.655 296.7 166.411 296.833 166.094C296.966 165.776 297.032 165.396 297.032 164.953C297.032 164.521 296.967 164.139 296.837 163.809C296.707 163.478 296.514 163.219 296.259 163.031C296.004 162.844 295.688 162.75 295.313 162.75C294.923 162.75 294.597 162.849 294.337 163.047C294.079 163.245 293.885 163.51 293.755 163.844C293.627 164.177 293.563 164.547 293.563 164.953C293.563 165.37 293.629 165.738 293.759 166.059C293.892 166.376 294.087 166.626 294.345 166.809C294.605 166.988 294.928 167.078 295.313 167.078ZM299.626 168V162H300.548V168H299.626ZM300.095 161C299.915 161 299.76 160.939 299.63 160.816C299.502 160.694 299.438 160.547 299.438 160.375C299.438 160.203 299.502 160.056 299.63 159.934C299.76 159.811 299.915 159.75 300.095 159.75C300.274 159.75 300.428 159.811 300.556 159.934C300.686 160.056 300.751 160.203 300.751 160.375C300.751 160.547 300.686 160.694 300.556 160.816C300.428 160.939 300.274 161 300.095 161ZM304.846 162V162.781H301.736V162H304.846ZM302.643 160.562H303.564V166.281C303.564 166.542 303.602 166.737 303.678 166.867C303.756 166.995 303.855 167.081 303.975 167.125C304.097 167.167 304.226 167.187 304.361 167.187C304.463 167.187 304.546 167.182 304.611 167.172C304.676 167.159 304.729 167.148 304.768 167.141L304.955 167.969C304.893 167.992 304.805 168.016 304.693 168.039C304.581 168.065 304.439 168.078 304.268 168.078C304.007 168.078 303.752 168.022 303.502 167.91C303.255 167.798 303.049 167.628 302.885 167.398C302.723 167.169 302.643 166.88 302.643 166.531V160.562ZM307.283 160V168H306.361V160H307.283ZM311.487 168.125C310.909 168.125 310.41 167.997 309.991 167.742C309.575 167.484 309.253 167.125 309.026 166.664C308.802 166.201 308.69 165.661 308.69 165.047C308.69 164.432 308.802 163.891 309.026 163.422C309.253 162.951 309.568 162.583 309.972 162.32C310.378 162.055 310.852 161.922 311.394 161.922C311.706 161.922 312.015 161.974 312.319 162.078C312.624 162.182 312.901 162.352 313.151 162.586C313.401 162.818 313.601 163.125 313.749 163.508C313.897 163.891 313.972 164.362 313.972 164.922V165.312H309.347V164.516H313.034C313.034 164.177 312.966 163.875 312.831 163.609C312.698 163.344 312.508 163.134 312.261 162.98C312.016 162.827 311.727 162.75 311.394 162.75C311.026 162.75 310.709 162.841 310.44 163.023C310.175 163.203 309.97 163.437 309.827 163.727C309.684 164.016 309.612 164.326 309.612 164.656V165.188C309.612 165.641 309.69 166.025 309.847 166.34C310.006 166.652 310.226 166.891 310.507 167.055C310.788 167.216 311.115 167.297 311.487 167.297C311.729 167.297 311.948 167.263 312.144 167.195C312.341 167.125 312.512 167.021 312.655 166.883C312.799 166.742 312.909 166.568 312.987 166.359L313.878 166.609C313.784 166.911 313.627 167.177 313.405 167.406C313.184 167.633 312.91 167.81 312.585 167.937C312.259 168.063 311.894 168.125 311.487 168.125ZM316.296 164.391V168H315.374V162H316.265V162.937H316.343C316.483 162.633 316.697 162.388 316.983 162.203C317.27 162.016 317.64 161.922 318.093 161.922C318.499 161.922 318.854 162.005 319.159 162.172C319.464 162.336 319.701 162.586 319.87 162.922C320.039 163.255 320.124 163.677 320.124 164.188V168H319.202V164.25C319.202 163.779 319.08 163.411 318.835 163.148C318.59 162.883 318.254 162.75 317.827 162.75C317.533 162.75 317.27 162.814 317.038 162.941C316.809 163.069 316.628 163.255 316.495 163.5C316.362 163.745 316.296 164.042 316.296 164.391ZM326.059 163.344L325.23 163.578C325.178 163.44 325.102 163.306 325 163.176C324.901 163.043 324.766 162.934 324.594 162.848C324.422 162.762 324.202 162.719 323.934 162.719C323.566 162.719 323.26 162.803 323.016 162.973C322.773 163.139 322.652 163.352 322.652 163.609C322.652 163.839 322.736 164.02 322.902 164.152C323.069 164.285 323.329 164.396 323.684 164.484L324.574 164.703C325.111 164.833 325.51 165.033 325.773 165.301C326.036 165.566 326.168 165.909 326.168 166.328C326.168 166.672 326.069 166.979 325.871 167.25C325.676 167.521 325.402 167.734 325.051 167.891C324.699 168.047 324.29 168.125 323.824 168.125C323.212 168.125 322.706 167.992 322.305 167.727C321.904 167.461 321.65 167.073 321.543 166.562L322.418 166.344C322.501 166.667 322.659 166.909 322.891 167.07C323.125 167.232 323.431 167.312 323.809 167.312C324.238 167.312 324.579 167.221 324.832 167.039C325.087 166.854 325.215 166.633 325.215 166.375C325.215 166.167 325.142 165.992 324.996 165.852C324.85 165.708 324.626 165.602 324.324 165.531L323.324 165.297C322.775 165.167 322.371 164.965 322.113 164.691C321.858 164.415 321.73 164.07 321.73 163.656C321.73 163.318 321.826 163.018 322.016 162.758C322.208 162.497 322.47 162.293 322.801 162.145C323.134 161.996 323.512 161.922 323.934 161.922C324.527 161.922 324.993 162.052 325.332 162.312C325.673 162.573 325.915 162.917 326.059 163.344ZM330.54 168L331.853 160H332.634L331.321 168H330.54ZM326.899 165.781L327.024 165H332.993L332.868 165.781H326.899ZM327.728 168L329.04 160H329.821L328.509 168H327.728ZM327.368 163L327.493 162.219H333.462L333.337 163H327.368ZM334.292 166.359V165.562L337.808 160H338.386V161.234H337.995L335.339 165.437V165.5H340.073V166.359H334.292ZM338.058 168V166.117V165.746V160H338.979V168H338.058ZM344.242 160V168H343.273V161.016H343.227L341.273 162.312V161.328L343.273 160H344.242ZM349.355 160V168H348.387V161.016H348.34L346.387 162.312V161.328L348.387 160H349.355ZM351.906 168L355.484 160.922V160.859H351.359V160H356.484V160.906L352.922 168H351.906Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="row-2-title" d="M39.6278 159.561V158.545H46.7188V159.561H43.7457V168H42.6009V159.561H39.6278ZM49.4275 163.734V168H48.338V158.545H49.4275V162.017H49.5198C49.686 161.651 49.9353 161.36 50.2677 161.145C50.6031 160.926 51.0494 160.817 51.6064 160.817C52.0896 160.817 52.5128 160.914 52.876 161.108C53.2391 161.298 53.5207 161.592 53.7208 161.989C53.9239 162.383 54.0255 162.885 54.0255 163.494V168H52.936V163.568C52.936 163.005 52.7898 162.569 52.4974 162.262C52.2081 161.951 51.8065 161.795 51.2925 161.795C50.9355 161.795 50.6154 161.871 50.3323 162.022C50.0522 162.172 49.8306 162.393 49.6675 162.682C49.5075 162.971 49.4275 163.322 49.4275 163.734ZM58.9917 168.148C58.3084 168.148 57.719 167.997 57.2235 167.695C56.7311 167.391 56.351 166.966 56.0833 166.421C55.8186 165.873 55.6863 165.236 55.6863 164.51C55.6863 163.784 55.8186 163.143 56.0833 162.589C56.351 162.032 56.7234 161.598 57.2005 161.288C57.6806 160.974 58.2407 160.817 58.8809 160.817C59.2502 160.817 59.6149 160.878 59.975 161.001C60.335 161.125 60.6628 161.325 60.9583 161.602C61.2537 161.875 61.4892 162.239 61.6646 162.691C61.84 163.143 61.9277 163.701 61.9277 164.362V164.824H56.4618V163.882H60.8198C60.8198 163.482 60.7398 163.125 60.5797 162.811C60.4228 162.497 60.1981 162.249 59.9057 162.068C59.6164 161.886 59.2748 161.795 58.8809 161.795C58.4469 161.795 58.0714 161.903 57.7544 162.119C57.4405 162.331 57.1989 162.608 57.0297 162.95C56.8604 163.291 56.7757 163.657 56.7757 164.048V164.676C56.7757 165.212 56.8681 165.666 57.0527 166.038C57.2405 166.407 57.5005 166.689 57.8329 166.883C58.1653 167.074 58.5516 167.169 58.9917 167.169C59.2779 167.169 59.5364 167.129 59.7672 167.049C60.0011 166.966 60.2027 166.843 60.372 166.68C60.5413 166.513 60.6721 166.307 60.7644 166.061L61.8169 166.357C61.7061 166.714 61.5199 167.027 61.2583 167.298C60.9967 167.566 60.6736 167.775 60.2889 167.926C59.9042 168.074 59.4718 168.148 58.9917 168.148ZM63.585 168V160.909H64.6376V162.017H64.7299C64.8777 161.638 65.1162 161.345 65.4455 161.135C65.7748 160.923 66.1703 160.817 66.6319 160.817C67.0997 160.817 67.4891 160.923 67.7999 161.135C68.1138 161.345 68.3585 161.638 68.5339 162.017H68.6078C68.7894 161.651 69.0617 161.36 69.4249 161.145C69.7881 160.926 70.2235 160.817 70.7314 160.817C71.3654 160.817 71.8839 161.015 72.2871 161.412C72.6903 161.806 72.8919 162.42 72.8919 163.254V168H71.8024V163.254C71.8024 162.731 71.6593 162.357 71.373 162.132C71.0868 161.908 70.7498 161.795 70.362 161.795C69.8635 161.795 69.4772 161.946 69.2033 162.248C68.9294 162.546 68.7924 162.925 68.7924 163.384V168H67.6845V163.143C67.6845 162.74 67.5537 162.416 67.2921 162.169C67.0305 161.92 66.6935 161.795 66.2811 161.795C65.9979 161.795 65.7333 161.871 65.487 162.022C65.2439 162.172 65.0469 162.382 64.8961 162.65C64.7484 162.914 64.6745 163.22 64.6745 163.568V168H63.585ZM77.8569 168.148C77.1737 168.148 76.5843 167.997 76.0888 167.695C75.5964 167.391 75.2163 166.966 74.9485 166.421C74.6838 165.873 74.5515 165.236 74.5515 164.51C74.5515 163.784 74.6838 163.143 74.9485 162.589C75.2163 162.032 75.5887 161.598 76.0657 161.288C76.5458 160.974 77.1059 160.817 77.7461 160.817C78.1154 160.817 78.4801 160.878 78.8402 161.001C79.2003 161.125 79.5281 161.325 79.8235 161.602C80.119 161.875 80.3544 162.239 80.5298 162.691C80.7053 163.143 80.793 163.701 80.793 164.362V164.824H75.3271V163.882H79.685C79.685 163.482 79.605 163.125 79.445 162.811C79.288 162.497 79.0633 162.249 78.771 162.068C78.4817 161.886 78.14 161.795 77.7461 161.795C77.3121 161.795 76.9367 161.903 76.6197 162.119C76.3058 162.331 76.0642 162.608 75.8949 162.95C75.7256 163.291 75.641 163.657 75.641 164.048V164.676C75.641 165.212 75.7333 165.666 75.918 166.038C76.1057 166.407 76.3658 166.689 76.6982 166.883C77.0305 167.074 77.4168 167.169 77.8569 167.169C78.1431 167.169 78.4016 167.129 78.6325 167.049C78.8664 166.966 79.0679 166.843 79.2372 166.68C79.4065 166.513 79.5373 166.307 79.6296 166.061L80.6822 166.357C80.5714 166.714 80.3852 167.027 80.1236 167.298C79.862 167.566 79.5388 167.775 79.1541 167.926C78.7694 168.074 78.337 168.148 77.8569 168.148ZM85.1278 168.148C84.5369 168.148 84.0153 167.998 83.5629 167.7C83.1104 167.398 82.7565 166.974 82.5011 166.426C82.2456 165.875 82.1179 165.224 82.1179 164.473C82.1179 163.728 82.2456 163.082 82.5011 162.534C82.7565 161.986 83.112 161.563 83.5675 161.265C84.023 160.966 84.5492 160.817 85.1463 160.817C85.608 160.817 85.9727 160.894 86.2404 161.048C86.5112 161.198 86.7174 161.371 86.859 161.565C87.0037 161.755 87.116 161.912 87.196 162.036H87.2884V158.545H88.3778V168H87.3253V166.911H87.196C87.116 167.04 87.0021 167.203 86.8544 167.4C86.7067 167.594 86.4959 167.768 86.2219 167.922C85.948 168.072 85.5833 168.148 85.1278 168.148ZM85.2756 167.169C85.7126 167.169 86.0819 167.055 86.3835 166.827C86.6851 166.597 86.9144 166.278 87.0714 165.872C87.2283 165.462 87.3068 164.99 87.3068 164.455C87.3068 163.925 87.2299 163.462 87.076 163.065C86.9221 162.665 86.6944 162.354 86.3928 162.132C86.0911 161.908 85.7188 161.795 85.2756 161.795C84.8139 161.795 84.4292 161.914 84.1214 162.151C83.8168 162.385 83.5875 162.703 83.4336 163.107C83.2828 163.507 83.2074 163.956 83.2074 164.455C83.2074 164.959 83.2843 165.418 83.4382 165.83C83.5952 166.24 83.826 166.566 84.1307 166.809C84.4384 167.049 84.8201 167.169 85.2756 167.169ZM94.3285 168V158.545H100.034V159.561H95.4734V162.756H99.739V163.771H95.4734V166.984H100.108V168H94.3285ZM101.95 168V160.909H103.003V161.98H103.077C103.206 161.629 103.44 161.345 103.778 161.126C104.117 160.908 104.499 160.798 104.923 160.798C105.003 160.798 105.103 160.8 105.223 160.803C105.343 160.806 105.434 160.811 105.496 160.817V161.925C105.459 161.915 105.374 161.902 105.242 161.883C105.113 161.862 104.976 161.851 104.831 161.851C104.486 161.851 104.179 161.923 103.908 162.068C103.64 162.209 103.428 162.406 103.271 162.659C103.117 162.908 103.04 163.193 103.04 163.513V168H101.95ZM106.787 168V160.909H107.84V161.98H107.914C108.043 161.629 108.277 161.345 108.615 161.126C108.954 160.908 109.335 160.798 109.76 160.798C109.84 160.798 109.94 160.8 110.06 160.803C110.18 160.806 110.271 160.811 110.333 160.817V161.925C110.296 161.915 110.211 161.902 110.079 161.883C109.949 161.862 109.813 161.851 109.668 161.851C109.323 161.851 109.015 161.923 108.745 162.068C108.477 162.209 108.264 162.406 108.108 162.659C107.954 162.908 107.877 163.193 107.877 163.513V168H106.787ZM114.289 168.148C113.649 168.148 113.087 167.995 112.604 167.691C112.124 167.386 111.748 166.96 111.478 166.412C111.21 165.864 111.076 165.224 111.076 164.491C111.076 163.753 111.21 163.108 111.478 162.557C111.748 162.006 112.124 161.578 112.604 161.274C113.087 160.969 113.649 160.817 114.289 160.817C114.929 160.817 115.489 160.969 115.969 161.274C116.453 161.578 116.828 162.006 117.096 162.557C117.367 163.108 117.502 163.753 117.502 164.491C117.502 165.224 117.367 165.864 117.096 166.412C116.828 166.96 116.453 167.386 115.969 167.691C115.489 167.995 114.929 168.148 114.289 168.148ZM114.289 167.169C114.775 167.169 115.175 167.044 115.489 166.795C115.803 166.546 116.036 166.218 116.186 165.812C116.337 165.406 116.413 164.965 116.413 164.491C116.413 164.018 116.337 163.576 116.186 163.167C116.036 162.757 115.803 162.426 115.489 162.174C115.175 161.922 114.775 161.795 114.289 161.795C113.803 161.795 113.403 161.922 113.089 162.174C112.775 162.426 112.542 162.757 112.392 163.167C112.241 163.576 112.165 164.018 112.165 164.491C112.165 164.965 112.241 165.406 112.392 165.812C112.542 166.218 112.775 166.546 113.089 166.795C113.403 167.044 113.803 167.169 114.289 167.169ZM119.165 168V160.909H120.218V161.98H120.292C120.421 161.629 120.655 161.345 120.993 161.126C121.332 160.908 121.713 160.798 122.138 160.798C122.218 160.798 122.318 160.8 122.438 160.803C122.558 160.806 122.649 160.811 122.711 160.817V161.925C122.674 161.915 122.589 161.902 122.457 161.883C122.327 161.862 122.19 161.851 122.046 161.851C121.701 161.851 121.393 161.923 121.123 162.068C120.855 162.209 120.642 162.406 120.485 162.659C120.332 162.908 120.255 163.193 120.255 163.513V168H119.165ZM127.806 158.545H129.172L132.386 166.393H132.496L135.709 158.545H137.076V168H136.005V160.817H135.913L132.958 168H131.924L128.969 160.817H128.877V168H127.806V158.545ZM142.197 168.148C141.513 168.148 140.924 167.997 140.429 167.695C139.936 167.391 139.556 166.966 139.288 166.421C139.024 165.873 138.891 165.236 138.891 164.51C138.891 163.784 139.024 163.143 139.288 162.589C139.556 162.032 139.929 161.598 140.406 161.288C140.886 160.974 141.446 160.817 142.086 160.817C142.455 160.817 142.82 160.878 143.18 161.001C143.54 161.125 143.868 161.325 144.163 161.602C144.459 161.875 144.694 162.239 144.87 162.691C145.045 163.143 145.133 163.701 145.133 164.362V164.824H139.667V163.882H144.025C144.025 163.482 143.945 163.125 143.785 162.811C143.628 162.497 143.403 162.249 143.111 162.068C142.821 161.886 142.48 161.795 142.086 161.795C141.652 161.795 141.277 161.903 140.96 162.119C140.646 162.331 140.404 162.608 140.235 162.95C140.065 163.291 139.981 163.657 139.981 164.048V164.676C139.981 165.212 140.073 165.666 140.258 166.038C140.446 166.407 140.706 166.689 141.038 166.883C141.37 167.074 141.757 167.169 142.197 167.169C142.483 167.169 142.741 167.129 142.972 167.049C143.206 166.966 143.408 166.843 143.577 166.68C143.746 166.513 143.877 166.307 143.969 166.061L145.022 166.357C144.911 166.714 144.725 167.027 144.463 167.298C144.202 167.566 143.879 167.775 143.494 167.926C143.109 168.074 142.677 168.148 142.197 168.148ZM151.813 162.497L150.834 162.774C150.773 162.611 150.682 162.453 150.562 162.299C150.445 162.142 150.285 162.012 150.082 161.911C149.879 161.809 149.618 161.759 149.301 161.759C148.868 161.759 148.506 161.859 148.217 162.059C147.93 162.256 147.787 162.506 147.787 162.811C147.787 163.082 147.886 163.296 148.083 163.453C148.28 163.61 148.587 163.741 149.006 163.845L150.059 164.104C150.693 164.258 151.165 164.493 151.476 164.81C151.787 165.124 151.942 165.529 151.942 166.024C151.942 166.43 151.825 166.794 151.591 167.114C151.36 167.434 151.037 167.686 150.622 167.871C150.206 168.055 149.723 168.148 149.172 168.148C148.449 168.148 147.85 167.991 147.376 167.677C146.902 167.363 146.602 166.904 146.476 166.301L147.51 166.043C147.609 166.424 147.795 166.71 148.069 166.901C148.346 167.092 148.708 167.188 149.154 167.188C149.662 167.188 150.065 167.08 150.363 166.864C150.665 166.646 150.816 166.384 150.816 166.08C150.816 165.833 150.73 165.627 150.557 165.461C150.385 165.292 150.12 165.165 149.763 165.082L148.581 164.805C147.932 164.652 147.455 164.413 147.15 164.09C146.849 163.764 146.698 163.356 146.698 162.866C146.698 162.466 146.81 162.112 147.035 161.805C147.263 161.497 147.572 161.255 147.963 161.08C148.357 160.904 148.803 160.817 149.301 160.817C150.003 160.817 150.554 160.971 150.954 161.278C151.357 161.586 151.644 161.992 151.813 162.497ZM158.605 162.497L157.626 162.774C157.565 162.611 157.474 162.453 157.354 162.299C157.237 162.142 157.077 162.012 156.874 161.911C156.671 161.809 156.41 161.759 156.093 161.759C155.66 161.759 155.298 161.859 155.009 162.059C154.722 162.256 154.579 162.506 154.579 162.811C154.579 163.082 154.678 163.296 154.875 163.453C155.072 163.61 155.379 163.741 155.798 163.845L156.851 164.104C157.485 164.258 157.957 164.493 158.268 164.81C158.579 165.124 158.734 165.529 158.734 166.024C158.734 166.43 158.617 166.794 158.383 167.114C158.152 167.434 157.829 167.686 157.414 167.871C156.998 168.055 156.515 168.148 155.964 168.148C155.241 168.148 154.642 167.991 154.168 167.677C153.694 167.363 153.394 166.904 153.268 166.301L154.302 166.043C154.401 166.424 154.587 166.71 154.861 166.901C155.138 167.092 155.499 167.188 155.946 167.188C156.454 167.188 156.857 167.08 157.155 166.864C157.457 166.646 157.608 166.384 157.608 166.08C157.608 165.833 157.522 165.627 157.349 165.461C157.177 165.292 156.912 165.165 156.555 165.082L155.373 164.805C154.724 164.652 154.247 164.413 153.942 164.09C153.641 163.764 153.49 163.356 153.49 162.866C153.49 162.466 153.602 162.112 153.827 161.805C154.055 161.497 154.364 161.255 154.755 161.08C155.149 160.904 155.595 160.817 156.093 160.817C156.795 160.817 157.346 160.971 157.746 161.278C158.149 161.586 158.436 161.992 158.605 162.497ZM162.461 168.166C162.011 168.166 161.604 168.082 161.237 167.912C160.871 167.74 160.58 167.492 160.365 167.169C160.149 166.843 160.042 166.449 160.042 165.987C160.042 165.581 160.122 165.252 160.282 164.999C160.442 164.744 160.656 164.544 160.923 164.399C161.191 164.254 161.487 164.147 161.81 164.076C162.136 164.002 162.464 163.944 162.793 163.901C163.224 163.845 163.573 163.804 163.841 163.776C164.112 163.745 164.309 163.694 164.432 163.624C164.558 163.553 164.621 163.43 164.621 163.254V163.217C164.621 162.762 164.497 162.408 164.247 162.156C164.001 161.903 163.627 161.777 163.126 161.777C162.605 161.777 162.198 161.891 161.902 162.119C161.607 162.346 161.399 162.589 161.279 162.848L160.245 162.479C160.43 162.048 160.676 161.712 160.983 161.472C161.294 161.229 161.633 161.06 161.999 160.964C162.368 160.866 162.732 160.817 163.089 160.817C163.316 160.817 163.578 160.844 163.873 160.9C164.172 160.952 164.46 161.061 164.737 161.228C165.017 161.394 165.249 161.645 165.434 161.98C165.618 162.316 165.711 162.765 165.711 163.328V168H164.621V167.04H164.566C164.492 167.194 164.369 167.358 164.197 167.534C164.024 167.709 163.795 167.858 163.509 167.982C163.222 168.105 162.873 168.166 162.461 168.166ZM162.627 167.188C163.058 167.188 163.421 167.103 163.716 166.934C164.015 166.764 164.24 166.546 164.39 166.278C164.544 166.01 164.621 165.729 164.621 165.433V164.436C164.575 164.491 164.474 164.542 164.317 164.588C164.163 164.632 163.984 164.67 163.781 164.704C163.581 164.735 163.386 164.762 163.195 164.787C163.007 164.808 162.855 164.827 162.738 164.842C162.455 164.879 162.19 164.939 161.944 165.022C161.701 165.102 161.504 165.224 161.353 165.387C161.205 165.547 161.131 165.766 161.131 166.043C161.131 166.421 161.271 166.707 161.551 166.901C161.834 167.092 162.193 167.188 162.627 167.188ZM170.562 170.807C170.035 170.807 169.583 170.739 169.204 170.604C168.826 170.471 168.51 170.296 168.258 170.077C168.009 169.862 167.81 169.631 167.662 169.385L168.53 168.776C168.629 168.905 168.753 169.053 168.904 169.219C169.055 169.388 169.261 169.534 169.523 169.657C169.787 169.783 170.134 169.847 170.562 169.847C171.134 169.847 171.606 169.708 171.979 169.431C172.351 169.154 172.537 168.72 172.537 168.129V166.689H172.445C172.365 166.818 172.251 166.978 172.103 167.169C171.959 167.357 171.749 167.525 171.476 167.672C171.205 167.817 170.839 167.889 170.377 167.889C169.804 167.889 169.29 167.754 168.835 167.483C168.383 167.212 168.024 166.818 167.759 166.301C167.498 165.784 167.367 165.156 167.367 164.418C167.367 163.691 167.495 163.059 167.75 162.52C168.006 161.979 168.361 161.56 168.816 161.265C169.272 160.966 169.798 160.817 170.395 160.817C170.857 160.817 171.223 160.894 171.494 161.048C171.768 161.198 171.977 161.371 172.122 161.565C172.27 161.755 172.383 161.912 172.464 162.036H172.574V160.909H173.627V168.203C173.627 168.812 173.488 169.308 173.211 169.69C172.937 170.074 172.568 170.356 172.103 170.534C171.642 170.716 171.128 170.807 170.562 170.807ZM170.525 166.911C170.962 166.911 171.331 166.81 171.633 166.61C171.934 166.41 172.163 166.123 172.32 165.747C172.477 165.372 172.556 164.922 172.556 164.399C172.556 163.888 172.479 163.437 172.325 163.047C172.171 162.656 171.943 162.349 171.642 162.128C171.34 161.906 170.968 161.795 170.525 161.795C170.063 161.795 169.678 161.912 169.37 162.146C169.066 162.38 168.836 162.694 168.683 163.088C168.532 163.482 168.456 163.919 168.456 164.399C168.456 164.892 168.533 165.327 168.687 165.706C168.844 166.081 169.075 166.377 169.38 166.592C169.687 166.804 170.069 166.911 170.525 166.911ZM178.594 168.148C177.911 168.148 177.322 167.997 176.826 167.695C176.334 167.391 175.954 166.966 175.686 166.421C175.421 165.873 175.289 165.236 175.289 164.51C175.289 163.784 175.421 163.143 175.686 162.589C175.954 162.032 176.326 161.598 176.803 161.288C177.283 160.974 177.843 160.817 178.483 160.817C178.853 160.817 179.217 160.878 179.578 161.001C179.938 161.125 180.265 161.325 180.561 161.602C180.856 161.875 181.092 162.239 181.267 162.691C181.443 163.143 181.53 163.701 181.53 164.362V164.824H176.064V163.882H180.422C180.422 163.482 180.342 163.125 180.182 162.811C180.025 162.497 179.801 162.249 179.508 162.068C179.219 161.886 178.877 161.795 178.483 161.795C178.049 161.795 177.674 161.903 177.357 162.119C177.043 162.331 176.801 162.608 176.632 162.95C176.463 163.291 176.378 163.657 176.378 164.048V164.676C176.378 165.212 176.471 165.666 176.655 166.038C176.843 166.407 177.103 166.689 177.435 166.883C177.768 167.074 178.154 167.169 178.594 167.169C178.88 167.169 179.139 167.129 179.37 167.049C179.604 166.966 179.805 166.843 179.975 166.68C180.144 166.513 180.275 166.307 180.367 166.061L181.419 166.357C181.309 166.714 181.122 167.027 180.861 167.298C180.599 167.566 180.276 167.775 179.891 167.926C179.507 168.074 179.074 168.148 178.594 168.148ZM188.21 162.497L187.232 162.774C187.17 162.611 187.079 162.453 186.959 162.299C186.842 162.142 186.682 162.012 186.479 161.911C186.276 161.809 186.016 161.759 185.699 161.759C185.265 161.759 184.903 161.859 184.614 162.059C184.328 162.256 184.185 162.506 184.185 162.811C184.185 163.082 184.283 163.296 184.48 163.453C184.677 163.61 184.985 163.741 185.403 163.845L186.456 164.104C187.09 164.258 187.562 164.493 187.873 164.81C188.184 165.124 188.34 165.529 188.34 166.024C188.34 166.43 188.223 166.794 187.989 167.114C187.758 167.434 187.435 167.686 187.019 167.871C186.604 168.055 186.121 168.148 185.57 168.148C184.846 168.148 184.248 167.991 183.774 167.677C183.3 167.363 183 166.904 182.874 166.301L183.908 166.043C184.006 166.424 184.192 166.71 184.466 166.901C184.743 167.092 185.105 167.188 185.551 167.188C186.059 167.188 186.462 167.08 186.761 166.864C187.062 166.646 187.213 166.384 187.213 166.08C187.213 165.833 187.127 165.627 186.955 165.461C186.782 165.292 186.518 165.165 186.161 165.082L184.979 164.805C184.329 164.652 183.852 164.413 183.548 164.09C183.246 163.764 183.095 163.356 183.095 162.866C183.095 162.466 183.208 162.112 183.432 161.805C183.66 161.497 183.969 161.255 184.36 161.08C184.754 160.904 185.2 160.817 185.699 160.817C186.401 160.817 186.952 160.971 187.352 161.278C187.755 161.586 188.041 161.992 188.21 162.497Z" fill="var(--vscode-quickInput-foreground)"/>
<g id="row-2-avatar-clip" clip-path="url(#clip3_46_2)">
<path id="row-2-avatar" d="M32 162.992C32 158.58 28.416 155 24 155C19.584 155 16 158.58 16 162.992C16 165.422 17.104 167.612 18.832 169.082C18.848 169.098 18.864 169.098 18.864 169.114C19.008 169.226 19.152 169.338 19.312 169.45C19.392 169.498 19.456 169.561 19.536 169.625C20.8581 170.521 22.4187 171 24.016 171C25.6133 171 27.1739 170.521 28.496 169.625C28.576 169.577 28.64 169.514 28.72 169.465C28.864 169.354 29.024 169.242 29.168 169.13C29.184 169.114 29.2 169.114 29.2 169.098C30.896 167.611 32 165.422 32 162.992ZM24 169.993C22.496 169.993 21.12 169.513 19.984 168.714C20 168.586 20.032 168.459 20.064 168.331C20.1593 167.984 20.2992 167.651 20.48 167.34C20.656 167.036 20.864 166.764 21.12 166.524C21.36 166.284 21.648 166.061 21.936 165.885C22.24 165.709 22.56 165.581 22.912 165.485C23.2667 165.389 23.6326 165.341 24 165.342C25.0907 165.334 26.1412 165.753 26.928 166.508C27.296 166.876 27.584 167.308 27.792 167.803C27.904 168.091 27.984 168.395 28.032 168.714C26.8512 169.544 25.4434 169.991 24 169.993ZM21.552 162.593C21.411 162.27 21.3401 161.921 21.344 161.569C21.344 161.218 21.408 160.866 21.552 160.546C21.696 160.226 21.888 159.939 22.128 159.699C22.368 159.459 22.656 159.268 22.976 159.124C23.296 158.98 23.648 158.916 24 158.916C24.368 158.916 24.704 158.98 25.024 159.124C25.344 159.268 25.632 159.46 25.872 159.699C26.112 159.939 26.304 160.227 26.448 160.546C26.592 160.866 26.656 161.218 26.656 161.569C26.656 161.937 26.592 162.273 26.448 162.592C26.309 162.907 26.1138 163.195 25.872 163.44C25.6265 163.681 25.3392 163.876 25.024 164.015C24.3628 164.287 23.6212 164.287 22.96 164.015C22.6448 163.876 22.3575 163.681 22.112 163.44C21.8698 163.198 21.6793 162.911 21.552 162.593ZM28.976 167.899C28.976 167.867 28.96 167.851 28.96 167.819C28.8026 167.318 28.5707 166.844 28.272 166.413C27.973 165.978 27.6056 165.595 27.184 165.278C26.862 165.036 26.513 164.832 26.144 164.67C26.3119 164.559 26.4674 164.431 26.608 164.287C26.8465 164.052 27.056 163.788 27.232 163.503C27.5864 162.921 27.7694 162.25 27.76 161.569C27.7649 161.065 27.667 160.564 27.472 160.099C27.2795 159.651 27.0025 159.244 26.656 158.9C26.31 158.56 25.9029 158.289 25.456 158.1C24.9899 157.905 24.4891 157.808 23.984 157.813C23.4789 157.808 22.978 157.906 22.512 158.101C22.0613 158.289 21.6531 158.566 21.312 158.916C20.972 159.262 20.7006 159.668 20.512 160.115C20.317 160.58 20.2191 161.081 20.224 161.585C20.224 161.937 20.272 162.273 20.368 162.592C20.464 162.928 20.592 163.232 20.768 163.519C20.928 163.807 21.152 164.063 21.392 164.303C21.536 164.447 21.696 164.574 21.872 164.686C21.5018 164.852 21.1527 165.062 20.832 165.31C20.416 165.63 20.048 166.013 19.744 166.429C19.4423 166.859 19.2101 167.333 19.056 167.835C19.04 167.867 19.04 167.899 19.04 167.915C17.776 166.636 16.992 164.91 16.992 162.992C16.992 159.14 20.144 155.991 24 155.991C27.856 155.991 31.008 159.14 31.008 162.992C31.0059 164.832 30.2753 166.596 28.976 167.899Z" fill="var(--vscode-quickInput-foreground)"/>
</g>
<path id="section-1-item-count" d="M579.303 68.5455V78H578.158V69.7457H578.102L575.794 71.2784V70.1151L578.158 68.5455H579.303Z" fill="var(--vscode-pickerGroup-foreground)"/>
<path id="section-1-group-name" d="M63.1449 78V68.5455H66.3395C67.0781 68.5455 67.6844 68.6716 68.1584 68.924C68.6323 69.1733 68.9832 69.5165 69.2109 69.9535C69.4387 70.3905 69.5526 70.8875 69.5526 71.4446C69.5526 72.0017 69.4387 72.4956 69.2109 72.9265C68.9832 73.3574 68.6339 73.6959 68.163 73.9421C67.6921 74.1853 67.0904 74.3068 66.358 74.3068H63.7727V73.2727H66.321C66.8258 73.2727 67.232 73.1989 67.5398 73.0511C67.8506 72.9034 68.0753 72.6941 68.2138 72.4233C68.3554 72.1494 68.4261 71.8232 68.4261 71.4446C68.4261 71.0661 68.3554 70.7352 68.2138 70.4521C68.0722 70.1689 67.846 69.9504 67.5352 69.7965C67.2243 69.6396 66.8134 69.5611 66.3026 69.5611H64.2898V78H63.1449ZM67.5952 73.7528L69.9219 78H68.5923L66.3026 73.7528H67.5952ZM71.4603 78V68.5455H77.1663V69.5611H72.6052V72.7557H76.8708V73.7713H72.6052V76.9844H77.2401V78H71.4603ZM82.6645 75.0455H83.9202L84.9727 76.4304L85.2497 76.7997L86.8193 78.8864H85.5637L84.5296 77.5014L84.271 77.1506L82.6645 75.0455ZM87.2071 73.2727C87.2071 74.2699 87.0271 75.1316 86.667 75.858C86.3069 76.5843 85.8129 77.1444 85.1851 77.5384C84.5573 77.9323 83.8402 78.1293 83.0338 78.1293C82.2275 78.1293 81.5104 77.9323 80.8825 77.5384C80.2547 77.1444 79.7607 76.5843 79.4007 75.858C79.0406 75.1316 78.8605 74.2699 78.8605 73.2727C78.8605 72.2756 79.0406 71.4138 79.4007 70.6875C79.7607 69.9612 80.2547 69.401 80.8825 69.0071C81.5104 68.6132 82.2275 68.4162 83.0338 68.4162C83.8402 68.4162 84.5573 68.6132 85.1851 69.0071C85.8129 69.401 86.3069 69.9612 86.667 70.6875C87.0271 71.4138 87.2071 72.2756 87.2071 73.2727ZM86.0992 73.2727C86.0992 72.4541 85.9622 71.7631 85.6883 71.1999C85.4175 70.6367 85.0497 70.2105 84.585 69.9212C84.1233 69.6319 83.6063 69.4872 83.0338 69.4872C82.4614 69.4872 81.9428 69.6319 81.4781 69.9212C81.0164 70.2105 80.6486 70.6367 80.3747 71.1999C80.1039 71.7631 79.9685 72.4541 79.9685 73.2727C79.9685 74.0914 80.1039 74.7823 80.3747 75.3455C80.6486 75.9087 81.0164 76.335 81.4781 76.6243C81.9428 76.9136 82.4614 77.0582 83.0338 77.0582C83.6063 77.0582 84.1233 76.9136 84.585 76.6243C85.0497 76.335 85.4175 75.9087 85.6883 75.3455C85.9622 74.7823 86.0992 74.0914 86.0992 73.2727ZM95.3367 68.5455H96.4816V74.8054C96.4816 75.4517 96.3293 76.0288 96.0246 76.5366C95.723 77.0413 95.2967 77.4399 94.7458 77.7322C94.1949 78.0215 93.5486 78.1662 92.8069 78.1662C92.0652 78.1662 91.4189 78.0215 90.868 77.7322C90.3171 77.4399 89.8893 77.0413 89.5846 76.5366C89.283 76.0288 89.1322 75.4517 89.1322 74.8054V68.5455H90.2771V74.7131C90.2771 75.1747 90.3786 75.5856 90.5818 75.9457C90.7849 76.3027 91.0742 76.5843 91.4497 76.7905C91.8282 76.9936 92.2806 77.0952 92.8069 77.0952C93.3332 77.0952 93.7856 76.9936 94.1642 76.7905C94.5427 76.5843 94.832 76.3027 95.032 75.9457C95.2352 75.5856 95.3367 75.1747 95.3367 74.7131V68.5455ZM99.9128 68.5455V78H98.7679V68.5455H99.9128ZM102.208 78V68.5455H105.403C106.142 68.5455 106.748 68.6716 107.222 68.924C107.696 69.1733 108.047 69.5165 108.274 69.9535C108.502 70.3905 108.616 70.8875 108.616 71.4446C108.616 72.0017 108.502 72.4956 108.274 72.9265C108.047 73.3574 107.697 73.6959 107.226 73.9421C106.756 74.1853 106.154 74.3068 105.421 74.3068H102.836V73.2727H105.384C105.889 73.2727 106.295 73.1989 106.603 73.0511C106.914 72.9034 107.139 72.6941 107.277 72.4233C107.419 72.1494 107.49 71.8232 107.49 71.4446C107.49 71.0661 107.419 70.7352 107.277 70.4521C107.136 70.1689 106.909 69.9504 106.599 69.7965C106.288 69.6396 105.877 69.5611 105.366 69.5611H103.353V78H102.208ZM106.659 73.7528L108.985 78H107.656L105.366 73.7528H106.659ZM110.524 78V68.5455H116.23V69.5611H111.669V72.7557H115.934V73.7713H111.669V76.9844H116.304V78H110.524ZM123.464 70.9091C123.408 70.4413 123.184 70.0781 122.79 69.8196C122.396 69.5611 121.913 69.4318 121.34 69.4318C120.922 69.4318 120.555 69.4995 120.241 69.6349C119.931 69.7704 119.688 69.9566 119.512 70.1935C119.34 70.4305 119.254 70.6998 119.254 71.0014C119.254 71.2538 119.314 71.4708 119.434 71.6523C119.557 71.8308 119.714 71.9801 119.904 72.1001C120.095 72.2171 120.295 72.314 120.505 72.391C120.714 72.4648 120.906 72.5249 121.082 72.571L122.042 72.8295C122.288 72.8942 122.562 72.9834 122.864 73.0973C123.168 73.2112 123.459 73.3666 123.736 73.5636C124.016 73.7575 124.247 74.0067 124.429 74.3114C124.61 74.6161 124.701 74.9901 124.701 75.4332C124.701 75.9441 124.567 76.4058 124.299 76.8182C124.035 77.2306 123.647 77.5584 123.136 77.8015C122.628 78.0446 122.011 78.1662 121.285 78.1662C120.608 78.1662 120.021 78.0569 119.526 77.8384C119.033 77.6199 118.646 77.3152 118.363 76.9244C118.083 76.5335 117.924 76.0795 117.887 75.5625H119.069C119.1 75.9195 119.22 76.215 119.429 76.4489C119.641 76.6797 119.909 76.852 120.232 76.9659C120.558 77.0767 120.909 77.1321 121.285 77.1321C121.722 77.1321 122.114 77.0613 122.462 76.9197C122.81 76.7751 123.085 76.575 123.288 76.3196C123.491 76.0611 123.593 75.7595 123.593 75.4148C123.593 75.1009 123.505 74.8454 123.33 74.6484C123.154 74.4515 122.924 74.2914 122.637 74.1683C122.351 74.0452 122.042 73.9375 121.71 73.8452L120.546 73.5128C119.808 73.3004 119.223 72.9973 118.792 72.6033C118.361 72.2094 118.146 71.6939 118.146 71.0568C118.146 70.5275 118.289 70.0658 118.575 69.6719C118.864 69.2749 119.252 68.9671 119.738 68.7486C120.228 68.527 120.774 68.4162 121.377 68.4162C121.987 68.4162 122.528 68.5254 123.002 68.744C123.476 68.9594 123.852 69.2549 124.129 69.6303C124.409 70.0058 124.556 70.4321 124.572 70.9091H123.464ZM130.24 78V68.5455H135.909V69.5611H131.384V72.7557H135.484V73.7713H131.384V78H130.24ZM145.847 73.2727C145.847 74.2699 145.667 75.1316 145.307 75.858C144.947 76.5843 144.453 77.1444 143.825 77.5384C143.197 77.9323 142.48 78.1293 141.673 78.1293C140.867 78.1293 140.15 77.9323 139.522 77.5384C138.894 77.1444 138.4 76.5843 138.04 75.858C137.68 75.1316 137.5 74.2699 137.5 73.2727C137.5 72.2756 137.68 71.4138 138.04 70.6875C138.4 69.9612 138.894 69.401 139.522 69.0071C140.15 68.6132 140.867 68.4162 141.673 68.4162C142.48 68.4162 143.197 68.6132 143.825 69.0071C144.453 69.401 144.947 69.9612 145.307 70.6875C145.667 71.4138 145.847 72.2756 145.847 73.2727ZM144.739 73.2727C144.739 72.4541 144.602 71.7631 144.328 71.1999C144.057 70.6367 143.689 70.2105 143.225 69.9212C142.763 69.6319 142.246 69.4872 141.673 69.4872C141.101 69.4872 140.582 69.6319 140.118 69.9212C139.656 70.2105 139.288 70.6367 139.014 71.1999C138.744 71.7631 138.608 72.4541 138.608 73.2727C138.608 74.0914 138.744 74.7823 139.014 75.3455C139.288 75.9087 139.656 76.335 140.118 76.6243C140.582 76.9136 141.101 77.0582 141.673 77.0582C142.246 77.0582 142.763 76.9136 143.225 76.6243C143.689 76.335 144.057 75.9087 144.328 75.3455C144.602 74.7823 144.739 74.0914 144.739 73.2727ZM147.772 78V68.5455H148.917V76.9844H153.312V78H147.772ZM155.084 78V68.5455H156.229V76.9844H160.624V78H155.084ZM170.006 73.2727C170.006 74.2699 169.826 75.1316 169.466 75.858C169.106 76.5843 168.612 77.1444 167.984 77.5384C167.356 77.9323 166.639 78.1293 165.833 78.1293C165.026 78.1293 164.309 77.9323 163.681 77.5384C163.054 77.1444 162.56 76.5843 162.199 75.858C161.839 75.1316 161.659 74.2699 161.659 73.2727C161.659 72.2756 161.839 71.4138 162.199 70.6875C162.56 69.9612 163.054 69.401 163.681 69.0071C164.309 68.6132 165.026 68.4162 165.833 68.4162C166.639 68.4162 167.356 68.6132 167.984 69.0071C168.612 69.401 169.106 69.9612 169.466 70.6875C169.826 71.4138 170.006 72.2756 170.006 73.2727ZM168.898 73.2727C168.898 72.4541 168.761 71.7631 168.487 71.1999C168.216 70.6367 167.849 70.2105 167.384 69.9212C166.922 69.6319 166.405 69.4872 165.833 69.4872C165.26 69.4872 164.742 69.6319 164.277 69.9212C163.815 70.2105 163.447 70.6367 163.174 71.1999C162.903 71.7631 162.767 72.4541 162.767 73.2727C162.767 74.0914 162.903 74.7823 163.174 75.3455C163.447 75.9087 163.815 76.335 164.277 76.6243C164.742 76.9136 165.26 77.0582 165.833 77.0582C166.405 77.0582 166.922 76.9136 167.384 76.6243C167.849 76.335 168.216 75.9087 168.487 75.3455C168.761 74.7823 168.898 74.0914 168.898 73.2727ZM173.648 78L171.063 68.5455H172.226L174.202 76.2457H174.295L176.307 68.5455H177.6L179.613 76.2457H179.705L181.681 68.5455H182.844L180.259 78H179.077L176.991 70.4659H176.917L174.83 78H173.648ZM187.525 72.7649V73.7805H183.389V72.7649H187.525ZM195.795 68.5455H196.94V74.8054C196.94 75.4517 196.787 76.0288 196.483 76.5366C196.181 77.0413 195.755 77.4399 195.204 77.7322C194.653 78.0215 194.007 78.1662 193.265 78.1662C192.523 78.1662 191.877 78.0215 191.326 77.7322C190.775 77.4399 190.347 77.0413 190.043 76.5366C189.741 76.0288 189.59 75.4517 189.59 74.8054V68.5455H190.735V74.7131C190.735 75.1747 190.837 75.5856 191.04 75.9457C191.243 76.3027 191.532 76.5843 191.908 76.7905C192.286 76.9936 192.739 77.0952 193.265 77.0952C193.791 77.0952 194.244 76.9936 194.622 76.7905C195.001 76.5843 195.29 76.3027 195.49 75.9457C195.693 75.5856 195.795 75.1747 195.795 74.7131V68.5455ZM199.226 78V68.5455H202.421C203.162 68.5455 203.769 68.6793 204.239 68.9471C204.713 69.2118 205.064 69.5703 205.292 70.0227C205.52 70.4751 205.634 70.9799 205.634 71.5369C205.634 72.094 205.52 72.6003 205.292 73.0558C205.067 73.5112 204.72 73.8744 204.249 74.1452C203.778 74.413 203.175 74.5469 202.439 74.5469H200.149V73.5312H202.402C202.91 73.5312 203.318 73.4435 203.625 73.2681C203.933 73.0927 204.156 72.8557 204.295 72.5572C204.436 72.2556 204.507 71.9155 204.507 71.5369C204.507 71.1584 204.436 70.8198 204.295 70.5213C204.156 70.2228 203.932 69.9889 203.621 69.8196C203.31 69.6473 202.898 69.5611 202.384 69.5611H200.371V78H199.226Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-1-group-icon" fill-rule="evenodd" clip-rule="evenodd" d="M40.5 66H53.5L54 66.5V76.5L53.5 77H46.707L43.854 79.854L43 79.5V77H40.5L40 76.5V66.5L40.5 66ZM46.5 76H53V67H41V76H43.5L44 76.5V78.293L46.146 76.146L46.5 76ZM46.5 68H47.5V73H46.5V68ZM46.5 75H47.5V74H46.5V75Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-1-group-chevron" fill-rule="evenodd" clip-rule="evenodd" d="M24.024 69.928L19.667 74.285L19.047 73.667L23.716 69H24.334L29 73.667L28.381 74.285L24.024 69.928Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-2-item-count" d="M579.173 146.129C578.564 146.129 578.021 146.025 577.544 145.815C577.07 145.606 576.693 145.315 576.413 144.943C576.136 144.567 575.985 144.132 575.96 143.636H577.124C577.148 143.941 577.253 144.204 577.438 144.426C577.622 144.644 577.864 144.814 578.162 144.934C578.461 145.054 578.792 145.114 579.155 145.114C579.561 145.114 579.921 145.043 580.235 144.901C580.549 144.76 580.795 144.563 580.974 144.31C581.152 144.058 581.241 143.766 581.241 143.433C581.241 143.085 581.155 142.779 580.983 142.515C580.811 142.247 580.558 142.038 580.226 141.887C579.893 141.736 579.487 141.661 579.007 141.661H578.25V140.645H579.007C579.383 140.645 579.712 140.577 579.995 140.442C580.281 140.306 580.504 140.116 580.664 139.869C580.828 139.623 580.909 139.334 580.909 139.001C580.909 138.681 580.838 138.403 580.697 138.166C580.555 137.929 580.355 137.744 580.097 137.612C579.841 137.48 579.54 137.413 579.192 137.413C578.866 137.413 578.558 137.473 578.268 137.593C577.982 137.71 577.748 137.881 577.567 138.106C577.385 138.327 577.287 138.595 577.271 138.909H576.163C576.182 138.414 576.331 137.98 576.611 137.607C576.891 137.232 577.257 136.939 577.71 136.73C578.165 136.521 578.665 136.416 579.21 136.416C579.795 136.416 580.297 136.535 580.715 136.772C581.134 137.006 581.455 137.315 581.68 137.7C581.905 138.084 582.017 138.5 582.017 138.946C582.017 139.478 581.877 139.932 581.597 140.308C581.32 140.683 580.943 140.943 580.466 141.088V141.162C581.063 141.26 581.529 141.514 581.865 141.924C582.2 142.33 582.368 142.833 582.368 143.433C582.368 143.947 582.228 144.409 581.948 144.818C581.671 145.224 581.292 145.545 580.812 145.778C580.332 146.012 579.786 146.129 579.173 146.129Z" fill="var(--vscode-pickerGroup-foreground)"/>
<path id="section-2-group-name" d="M70.642 136.545V146H69.5341L64.3821 138.577H64.2898V146H63.1449V136.545H64.2528L69.4233 143.987H69.5156V136.545H70.642ZM72.933 146V136.545H78.6389V137.561H74.0779V140.756H78.3435V141.771H74.0779V144.984H78.7128V146H72.933ZM80.7025 146V136.545H86.4085V137.561H81.8474V140.756H86.113V141.771H81.8474V144.984H86.4823V146H80.7025ZM91.3896 146H88.472V136.545H91.5189C92.4361 136.545 93.2209 136.735 93.8733 137.113C94.5258 137.489 95.0259 138.029 95.3737 138.734C95.7214 139.435 95.8953 140.276 95.8953 141.254C95.8953 142.239 95.7199 143.087 95.3691 143.798C95.0182 144.506 94.5073 145.051 93.8364 145.432C93.1655 145.811 92.3499 146 91.3896 146ZM89.6169 144.984H91.3158C92.0975 144.984 92.7454 144.834 93.2593 144.532C93.7733 144.23 94.1565 143.801 94.4088 143.244C94.6612 142.687 94.7874 142.024 94.7874 141.254C94.7874 140.491 94.6627 139.834 94.4134 139.283C94.1642 138.729 93.7918 138.304 93.2963 138.009C92.8008 137.71 92.1837 137.561 91.445 137.561H89.6169V144.984ZM102.986 138.909C102.931 138.441 102.706 138.078 102.312 137.82C101.918 137.561 101.435 137.432 100.863 137.432C100.444 137.432 100.078 137.5 99.7639 137.635C99.4531 137.77 99.21 137.957 99.0345 138.194C98.8622 138.431 98.776 138.7 98.776 139.001C98.776 139.254 98.836 139.471 98.9561 139.652C99.0792 139.831 99.2361 139.98 99.4269 140.1C99.6177 140.217 99.8178 140.314 100.027 140.391C100.236 140.465 100.429 140.525 100.604 140.571L101.564 140.83C101.811 140.894 102.084 140.983 102.386 141.097C102.691 141.211 102.982 141.367 103.259 141.564C103.539 141.757 103.77 142.007 103.951 142.311C104.133 142.616 104.223 142.99 104.223 143.433C104.223 143.944 104.09 144.406 103.822 144.818C103.557 145.231 103.169 145.558 102.658 145.801C102.151 146.045 101.534 146.166 100.807 146.166C100.13 146.166 99.5439 146.057 99.0484 145.838C98.556 145.62 98.1682 145.315 97.885 144.924C97.605 144.533 97.4465 144.08 97.4095 143.562H98.5914C98.6221 143.92 98.7422 144.215 98.9514 144.449C99.1638 144.68 99.4316 144.852 99.7547 144.966C100.081 145.077 100.432 145.132 100.807 145.132C101.244 145.132 101.637 145.061 101.984 144.92C102.332 144.775 102.608 144.575 102.811 144.32C103.014 144.061 103.116 143.759 103.116 143.415C103.116 143.101 103.028 142.845 102.852 142.648C102.677 142.451 102.446 142.291 102.16 142.168C101.874 142.045 101.564 141.937 101.232 141.845L100.069 141.513C99.33 141.3 98.7452 140.997 98.3144 140.603C97.8835 140.209 97.6681 139.694 97.6681 139.057C97.6681 138.527 97.8112 138.066 98.0974 137.672C98.3867 137.275 98.7745 136.967 99.2607 136.749C99.7501 136.527 100.296 136.416 100.9 136.416C101.509 136.416 102.051 136.525 102.525 136.744C102.999 136.959 103.374 137.255 103.651 137.63C103.931 138.006 104.079 138.432 104.094 138.909H102.986ZM108.95 136.545H110.261L112.883 140.959H112.994L115.616 136.545H116.927L113.511 142.104V146H112.366V142.104L108.95 136.545ZM125.941 141.273C125.941 142.27 125.76 143.132 125.4 143.858C125.04 144.584 124.546 145.144 123.919 145.538C123.291 145.932 122.574 146.129 121.767 146.129C120.961 146.129 120.244 145.932 119.616 145.538C118.988 145.144 118.494 144.584 118.134 143.858C117.774 143.132 117.594 142.27 117.594 141.273C117.594 140.276 117.774 139.414 118.134 138.688C118.494 137.961 118.988 137.401 119.616 137.007C120.244 136.613 120.961 136.416 121.767 136.416C122.574 136.416 123.291 136.613 123.919 137.007C124.546 137.401 125.04 137.961 125.4 138.688C125.76 139.414 125.941 140.276 125.941 141.273ZM124.833 141.273C124.833 140.454 124.696 139.763 124.422 139.2C124.151 138.637 123.783 138.21 123.318 137.921C122.857 137.632 122.34 137.487 121.767 137.487C121.195 137.487 120.676 137.632 120.211 137.921C119.75 138.21 119.382 138.637 119.108 139.2C118.837 139.763 118.702 140.454 118.702 141.273C118.702 142.091 118.837 142.782 119.108 143.346C119.382 143.909 119.75 144.335 120.211 144.624C120.676 144.914 121.195 145.058 121.767 145.058C122.34 145.058 122.857 144.914 123.318 144.624C123.783 144.335 124.151 143.909 124.422 143.346C124.696 142.782 124.833 142.091 124.833 141.273ZM134.07 136.545H135.215V142.805C135.215 143.452 135.063 144.029 134.758 144.537C134.456 145.041 134.03 145.44 133.479 145.732C132.928 146.022 132.282 146.166 131.54 146.166C130.799 146.166 130.152 146.022 129.601 145.732C129.05 145.44 128.623 145.041 128.318 144.537C128.016 144.029 127.866 143.452 127.866 142.805V136.545H129.01V142.713C129.01 143.175 129.112 143.586 129.315 143.946C129.518 144.303 129.808 144.584 130.183 144.79C130.562 144.994 131.014 145.095 131.54 145.095C132.067 145.095 132.519 144.994 132.898 144.79C133.276 144.584 133.565 144.303 133.765 143.946C133.969 143.586 134.07 143.175 134.07 142.713V136.545ZM137.501 146V136.545H140.696C141.435 136.545 142.041 136.672 142.515 136.924C142.989 137.173 143.34 137.516 143.567 137.953C143.795 138.391 143.909 138.888 143.909 139.445C143.909 140.002 143.795 140.496 143.567 140.926C143.34 141.357 142.99 141.696 142.519 141.942C142.049 142.185 141.447 142.307 140.714 142.307H138.129V141.273H140.677C141.182 141.273 141.588 141.199 141.896 141.051C142.207 140.903 142.432 140.694 142.57 140.423C142.712 140.149 142.783 139.823 142.783 139.445C142.783 139.066 142.712 138.735 142.57 138.452C142.429 138.169 142.202 137.95 141.892 137.797C141.581 137.64 141.17 137.561 140.659 137.561H138.646V146H137.501ZM141.952 141.753L144.278 146H142.949L140.659 141.753H141.952ZM149.473 146V136.545H152.668C153.406 136.545 154.013 136.672 154.487 136.924C154.96 137.173 155.311 137.516 155.539 137.953C155.767 138.391 155.881 138.888 155.881 139.445C155.881 140.002 155.767 140.496 155.539 140.926C155.311 141.357 154.962 141.696 154.491 141.942C154.02 142.185 153.419 142.307 152.686 142.307H150.101V141.273H152.649C153.154 141.273 153.56 141.199 153.868 141.051C154.179 140.903 154.403 140.694 154.542 140.423C154.683 140.149 154.754 139.823 154.754 139.445C154.754 139.066 154.683 138.735 154.542 138.452C154.4 138.169 154.174 137.95 153.863 137.797C153.552 137.64 153.142 137.561 152.631 137.561H150.618V146H149.473ZM153.923 141.753L156.25 146H154.92L152.631 141.753H153.923ZM157.788 146V136.545H163.494V137.561H158.933V140.756H163.199V141.771H158.933V144.984H163.568V146H157.788ZM165.946 136.545L168.753 144.504H168.863L171.67 136.545H172.87L169.399 146H168.217L164.745 136.545H165.946ZM175.488 136.545V146H174.343V136.545H175.488ZM177.784 146V136.545H183.49V137.561H178.928V140.756H183.194V141.771H178.928V144.984H183.563V146H177.784ZM187.27 146L184.685 136.545H185.849L187.824 144.246H187.917L189.93 136.545H191.222L193.235 144.246H193.327L195.303 136.545H196.466L193.881 146H192.699L190.613 138.466H190.539L188.452 146H187.27Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-2-1-group-icon" fill-rule="evenodd" clip-rule="evenodd" d="M40.5 134H53.5L54 134.5V141.354C53.714 141.03 53.3764 140.753 53 140.535V135H41V143H43.5L44 143.5V145.293L46.146 143.146L46.5 143H47.126C47.0438 143.32 47 143.655 47 144H46.707L43.854 146.854L43 146.5V144H40.5L40 143.5V134.5L40.5 134Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-2-2-group-icon" d="M51 141C50.4067 141 49.8266 141.176 49.3333 141.506C48.8399 141.835 48.4554 142.304 48.2284 142.852C48.0013 143.4 47.9419 144.003 48.0576 144.585C48.1734 145.167 48.4591 145.702 48.8787 146.121C49.2982 146.541 49.8328 146.827 50.4147 146.942C50.9967 147.058 51.5999 146.999 52.1481 146.772C52.6962 146.545 53.1648 146.16 53.4944 145.667C53.8241 145.173 54 144.593 54 144C53.999 143.205 53.6826 142.442 53.1202 141.88C52.5578 141.317 51.7954 141.001 51 141Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-2-group-chevron" fill-rule="evenodd" clip-rule="evenodd" d="M24.024 137.928L19.667 142.285L19.047 141.667L23.716 137H24.334L29 141.667L28.381 142.285L24.024 137.928Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-3-item-count" d="M575.757 215.061V214.119L579.912 207.545H580.595V209.004H580.134L576.994 213.972V214.045H582.589V215.061H575.757ZM580.207 217V214.775V214.336V207.545H581.297V217H580.207Z" fill="var(--vscode-pickerGroup-foreground)"/>
<path id="section-3-group-name" d="M66.0625 217H63.1449V207.545H66.1918C67.1089 207.545 67.8937 207.735 68.5462 208.113C69.1986 208.489 69.6987 209.029 70.0465 209.734C70.3943 210.435 70.5682 211.276 70.5682 212.254C70.5682 213.239 70.3928 214.087 70.0419 214.798C69.6911 215.506 69.1802 216.051 68.5092 216.432C67.8383 216.811 67.0227 217 66.0625 217ZM64.2898 215.984H65.9886C66.7704 215.984 67.4182 215.834 67.9322 215.532C68.4461 215.23 68.8293 214.801 69.0817 214.244C69.334 213.687 69.4602 213.024 69.4602 212.254C69.4602 211.491 69.3356 210.834 69.0863 210.283C68.837 209.729 68.4646 209.304 67.9691 209.009C67.4736 208.71 66.8565 208.561 66.1179 208.561H64.2898V215.984ZM72.4886 217V207.545H75.6832C76.4219 207.545 77.0282 207.672 77.5021 207.924C77.9761 208.173 78.3269 208.516 78.5547 208.953C78.7824 209.391 78.8963 209.888 78.8963 210.445C78.8963 211.002 78.7824 211.496 78.5547 211.926C78.3269 212.357 77.9776 212.696 77.5067 212.942C77.0359 213.185 76.4342 213.307 75.7017 213.307H73.1165V212.273H75.6648C76.1695 212.273 76.5758 212.199 76.8835 212.051C77.1944 211.903 77.419 211.694 77.5575 211.423C77.6991 211.149 77.7699 210.823 77.7699 210.445C77.7699 210.066 77.6991 209.735 77.5575 209.452C77.416 209.169 77.1897 208.95 76.8789 208.797C76.5681 208.64 76.1572 208.561 75.6463 208.561H73.6335V217H72.4886ZM76.9389 212.753L79.2656 217H77.9361L75.6463 212.753H76.9389ZM81.1919 217H79.9916L83.4632 207.545H84.645L88.1166 217H86.9163L84.091 209.041H84.0171L81.1919 217ZM81.635 213.307H86.4731V214.322H81.635V213.307ZM89.5892 217V207.545H95.2583V208.561H90.7341V211.756H94.8335V212.771H90.7341V217H89.5892ZM96.7021 208.561V207.545H103.793V208.561H100.82V217H99.6751V208.561H96.7021Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-3-1-group-icon" d="M43.497 208.85C43.9532 208.661 44.343 208.339 44.6159 207.928C44.8908 207.516 45.037 207.033 45.035 206.54C45.0428 206.197 44.9785 205.856 44.846 205.54C44.7212 205.238 44.538 204.961 44.306 204.729C44.074 204.497 43.7992 204.314 43.497 204.189C43.1813 204.058 42.8401 203.994 42.499 204C42.0039 204 41.5205 204.146 41.1111 204.421C40.6998 204.694 40.3782 205.084 40.1891 205.54C40 205.998 39.9513 206.501 40.0488 206.986C40.1443 207.472 40.3801 207.918 40.7291 208.269C41.0799 208.612 41.5205 208.846 41.998 208.949V214.037C41.5185 214.138 41.078 214.374 40.7291 214.717C40.3801 215.068 40.1443 215.514 40.0488 216C39.9533 216.485 40.002 216.988 40.1891 217.446C40.3782 217.902 40.6998 218.292 41.1111 218.565C41.5224 218.84 42.0058 218.986 42.499 218.984C42.8421 218.992 43.1832 218.927 43.499 218.795C43.8011 218.67 44.0779 218.487 44.308 218.255C44.5399 218.023 44.7231 217.748 44.8479 217.446C44.9805 217.13 45.0448 216.789 45.037 216.446C45.037 215.953 44.8908 215.469 44.6179 215.058C44.343 214.647 43.9551 214.327 43.499 214.136C43.3509 214.074 43.1969 214.027 43.039 213.996V208.988C43.039 208.988 43.3489 208.91 43.497 208.85ZM43.308 215.21C43.5399 215.349 43.731 215.549 43.8596 215.789C43.9883 216.029 44.0487 216.298 44.037 216.569C44.0234 216.84 43.9376 217.103 43.7875 217.329C43.6199 217.577 43.384 217.772 43.1072 217.889C42.8343 218 42.5361 218.027 42.2476 217.969C41.9552 217.912 41.6881 217.77 41.4776 217.559C41.2671 217.349 41.1248 217.08 41.0682 216.789C41.0098 216.501 41.0371 216.202 41.1482 215.929C41.2651 215.653 41.46 215.417 41.7076 215.249C41.9532 215.085 42.2417 215 42.538 215C42.809 214.996 43.076 215.07 43.308 215.21ZM42.538 207.99C42.2437 207.99 41.9552 207.902 41.7076 207.741C41.46 207.573 41.2651 207.337 41.1482 207.06C41.0371 206.787 41.0098 206.489 41.0682 206.201C41.1248 205.908 41.2671 205.641 41.4776 205.431C41.6881 205.22 41.9571 205.078 42.2476 205.021C42.5361 204.963 42.8343 204.99 43.1072 205.101C43.384 205.218 43.6199 205.413 43.7875 205.661C43.9376 205.887 44.0234 206.15 44.037 206.421C44.0506 206.692 43.9883 206.961 43.8596 207.201C43.731 207.44 43.5399 207.639 43.308 207.78C43.076 207.916 42.809 207.99 42.538 207.99Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-3-2-group-icon" fill-rule="evenodd" clip-rule="evenodd" d="M54.0543 216.5C54.0543 217.881 52.935 219 51.5543 219C50.1736 219 49.0543 217.881 49.0543 216.5C49.0543 215.119 50.1736 214 51.5543 214C52.935 214 54.0543 215.119 54.0543 216.5ZM51.5543 218C52.3827 218 53.0543 217.328 53.0543 216.5C53.0543 215.672 52.3827 215 51.5543 215C50.7258 215 50.0543 215.672 50.0543 216.5C50.0543 217.328 50.7258 218 51.5543 218Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-3-3-group-icon" d="M51.5543 211.751C52.1066 211.751 52.5543 211.303 52.5543 210.751C52.5543 210.198 52.1066 209.751 51.5543 209.751C51.002 209.751 50.5543 210.198 50.5543 210.751C50.5543 211.303 51.002 211.751 51.5543 211.751Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-3-4-group-icon" d="M51.5543 207.501C52.1066 207.501 52.5543 207.054 52.5543 206.501C52.5543 205.949 52.1066 205.501 51.5543 205.501C51.002 205.501 50.5543 205.949 50.5543 206.501C50.5543 207.054 51.002 207.501 51.5543 207.501Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-3-group-chevron" fill-rule="evenodd" clip-rule="evenodd" d="M24.024 208.928L19.667 213.285L19.047 212.667L23.716 208H24.334L29 212.667L28.381 213.285L24.024 208.928Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-4-item-count" d="M579.173 240.129C578.564 240.129 578.021 240.025 577.544 239.815C577.07 239.606 576.693 239.315 576.413 238.943C576.136 238.567 575.985 238.132 575.96 237.636H577.124C577.148 237.941 577.253 238.204 577.438 238.426C577.622 238.644 577.864 238.814 578.162 238.934C578.461 239.054 578.792 239.114 579.155 239.114C579.561 239.114 579.921 239.043 580.235 238.901C580.549 238.76 580.795 238.563 580.974 238.31C581.152 238.058 581.241 237.766 581.241 237.433C581.241 237.085 581.155 236.779 580.983 236.515C580.811 236.247 580.558 236.038 580.226 235.887C579.893 235.736 579.487 235.661 579.007 235.661H578.25V234.645H579.007C579.383 234.645 579.712 234.577 579.995 234.442C580.281 234.306 580.504 234.116 580.664 233.869C580.828 233.623 580.909 233.334 580.909 233.001C580.909 232.681 580.838 232.403 580.697 232.166C580.555 231.929 580.355 231.744 580.097 231.612C579.841 231.48 579.54 231.413 579.192 231.413C578.866 231.413 578.558 231.473 578.268 231.593C577.982 231.71 577.748 231.881 577.567 232.106C577.385 232.327 577.287 232.595 577.271 232.909H576.163C576.182 232.414 576.331 231.98 576.611 231.607C576.891 231.232 577.257 230.939 577.71 230.73C578.165 230.521 578.665 230.416 579.21 230.416C579.795 230.416 580.297 230.535 580.715 230.772C581.134 231.006 581.455 231.315 581.68 231.7C581.905 232.084 582.017 232.5 582.017 232.946C582.017 233.478 581.877 233.932 581.597 234.308C581.32 234.683 580.943 234.943 580.466 235.088V235.162C581.063 235.26 581.529 235.514 581.865 235.924C582.2 236.33 582.368 236.833 582.368 237.433C582.368 237.947 582.228 238.409 581.948 238.818C581.671 239.224 581.292 239.545 580.812 239.778C580.332 240.012 579.786 240.129 579.173 240.129Z" fill="var(--vscode-pickerGroup-foreground)"/>
<path id="section-4-group-name" d="M71.1222 235.273C71.1222 236.27 70.9421 237.132 70.582 237.858C70.2219 238.584 69.728 239.144 69.1001 239.538C68.4723 239.932 67.7552 240.129 66.9489 240.129C66.1425 240.129 65.4254 239.932 64.7976 239.538C64.1697 239.144 63.6758 238.584 63.3157 237.858C62.9556 237.132 62.7756 236.27 62.7756 235.273C62.7756 234.276 62.9556 233.414 63.3157 232.688C63.6758 231.961 64.1697 231.401 64.7976 231.007C65.4254 230.613 66.1425 230.416 66.9489 230.416C67.7552 230.416 68.4723 230.613 69.1001 231.007C69.728 231.401 70.2219 231.961 70.582 232.688C70.9421 233.414 71.1222 234.276 71.1222 235.273ZM70.0142 235.273C70.0142 234.454 69.8772 233.763 69.6033 233.2C69.3325 232.637 68.9647 232.21 68.5 231.921C68.0384 231.632 67.5213 231.487 66.9489 231.487C66.3764 231.487 65.8578 231.632 65.3931 231.921C64.9315 232.21 64.5637 232.637 64.2898 233.2C64.0189 233.763 63.8835 234.454 63.8835 235.273C63.8835 236.091 64.0189 236.782 64.2898 237.346C64.5637 237.909 64.9315 238.335 65.3931 238.624C65.8578 238.914 66.3764 239.058 66.9489 239.058C67.5213 239.058 68.0384 238.914 68.5 238.624C68.9647 238.335 69.3325 237.909 69.6033 237.346C69.8772 236.782 70.0142 236.091 70.0142 235.273ZM72.1366 231.561V230.545H79.2275V231.561H76.2545V240H75.1096V231.561H72.1366ZM80.9945 240V230.545H82.1394V234.756H87.1806V230.545H88.3255V240H87.1806V235.771H82.1394V240H80.9945ZM90.6175 240V230.545H96.3235V231.561H91.7624V234.756H96.0281V235.771H91.7624V238.984H96.3974V240H90.6175ZM98.3871 240V230.545H101.582C102.32 230.545 102.927 230.672 103.401 230.924C103.875 231.173 104.225 231.516 104.453 231.953C104.681 232.391 104.795 232.888 104.795 233.445C104.795 234.002 104.681 234.496 104.453 234.926C104.225 235.357 103.876 235.696 103.405 235.942C102.934 236.185 102.333 236.307 101.6 236.307H99.0149V235.273H101.563C102.068 235.273 102.474 235.199 102.782 235.051C103.093 234.903 103.317 234.694 103.456 234.423C103.598 234.149 103.668 233.823 103.668 233.445C103.668 233.066 103.598 232.735 103.456 232.452C103.314 232.169 103.088 231.95 102.777 231.797C102.467 231.64 102.056 231.561 101.545 231.561H99.532V240H98.3871ZM102.837 235.753L105.164 240H103.835L101.545 235.753H102.837Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-4-group-icon" d="M43 234C43 234.265 42.8946 234.52 42.7071 234.707C42.5196 234.895 42.2652 235 42 235C41.7348 235 41.4804 234.895 41.2929 234.707C41.1054 234.52 41 234.265 41 234C41 233.735 41.1054 233.48 41.2929 233.293C41.4804 233.105 41.7348 233 42 233C42.2652 233 42.5196 233.105 42.7071 233.293C42.8946 233.48 43 233.735 43 234ZM48 234C48 234.265 47.8946 234.52 47.7071 234.707C47.5196 234.895 47.2652 235 47 235C46.7348 235 46.4804 234.895 46.2929 234.707C46.1054 234.52 46 234.265 46 234C46 233.735 46.1054 233.48 46.2929 233.293C46.4804 233.105 46.7348 233 47 233C47.2652 233 47.5196 233.105 47.7071 233.293C47.8946 233.48 48 233.735 48 234ZM53 234C53 234.265 52.8946 234.52 52.7071 234.707C52.5196 234.895 52.2652 235 52 235C51.7348 235 51.4804 234.895 51.2929 234.707C51.1054 234.52 51 234.265 51 234C51 233.735 51.1054 233.48 51.2929 233.293C51.4804 233.105 51.7348 233 52 233C52.2652 233 52.5196 233.105 52.7071 233.293C52.8946 233.48 53 233.735 53 234Z" fill="var(--vscode-quickInput-foreground)"/>
<path id="section-4-group-chevron" fill-rule="evenodd" clip-rule="evenodd" d="M24.024 231.928L19.667 236.285L19.047 235.667L23.716 231H24.334L29 235.667L28.381 236.285L24.024 231.928Z" fill="var(--vscode-quickInput-foreground)"/>
<rect id="search-input-container" x="6.5" y="32.5" width="587" height="25" rx="1.5" fill="var(--vscode-input-background)" stroke="var(--vscode-input-border, transparent)"/>
<path id="search-input-label" fill="var(--vscode-input-foreground)" d="M20.7528 43.5H19.608C19.5402 43.1707 19.4218 42.8814 19.2525 42.6321C19.0863 42.3828 18.8832 42.1735 18.6431 42.0043C18.4061 41.8319 18.143 41.7027 17.8537 41.6165C17.5644 41.5303 17.2628 41.4872 16.9489 41.4872C16.3764 41.4872 15.8578 41.6319 15.3931 41.9212C14.9315 42.2105 14.5637 42.6367 14.2898 43.1999C14.0189 43.7631 13.8835 44.4541 13.8835 45.2727C13.8835 46.0914 14.0189 46.7823 14.2898 47.3455C14.5637 47.9087 14.9315 48.335 15.3931 48.6243C15.8578 48.9136 16.3764 49.0582 16.9489 49.0582C17.2628 49.0582 17.5644 49.0152 17.8537 48.929C18.143 48.8428 18.4061 48.7151 18.6431 48.5458C18.8832 48.3735 19.0863 48.1626 19.2525 47.9134C19.4218 47.661 19.5402 47.3717 19.608 47.0455H20.7528C20.6667 47.5286 20.5097 47.9611 20.282 48.3427C20.0542 48.7243 19.7711 49.049 19.4325 49.3168C19.094 49.5814 18.7139 49.783 18.2923 49.9215C17.8737 50.06 17.4259 50.1293 16.9489 50.1293C16.1425 50.1293 15.4254 49.9323 14.7976 49.5384C14.1697 49.1444 13.6758 48.5843 13.3157 47.858C12.9556 47.1316 12.7756 46.2699 12.7756 45.2727C12.7756 44.2756 12.9556 43.4138 13.3157 42.6875C13.6758 41.9612 14.1697 41.401 14.7976 41.0071C15.4254 40.6132 16.1425 40.4162 16.9489 40.4162C17.4259 40.4162 17.8737 40.4854 18.2923 40.6239C18.7139 40.7624 19.094 40.9656 19.4325 41.2333C19.7711 41.498 20.0542 41.8211 20.282 42.2028C20.5097 42.5813 20.6667 43.0137 20.7528 43.5ZM23.5447 45.7344V50H22.4552V40.5455H23.5447V44.017H23.637C23.8032 43.6508 24.0525 43.36 24.3849 43.1445C24.7203 42.926 25.1666 42.8168 25.7236 42.8168C26.2068 42.8168 26.63 42.9137 26.9932 43.1076C27.3563 43.2984 27.6379 43.5923 27.838 43.9893C28.0411 44.3833 28.1427 44.8849 28.1427 45.4943V50H27.0532V45.5682C27.0532 45.005 26.907 44.5695 26.6146 44.2617C26.3253 43.9509 25.9237 43.7955 25.4097 43.7955C25.0527 43.7955 24.7326 43.8709 24.4495 44.0217C24.1694 44.1725 23.9478 44.3925 23.7847 44.6818C23.6247 44.9711 23.5447 45.322 23.5447 45.7344ZM33.0165 50.1477C32.3764 50.1477 31.8147 49.9954 31.3315 49.6907C30.8514 49.386 30.4759 48.9598 30.2051 48.4119C29.9373 47.8641 29.8034 47.224 29.8034 46.4915C29.8034 45.7528 29.9373 45.1081 30.2051 44.5572C30.4759 44.0063 30.8514 43.5785 31.3315 43.2738C31.8147 42.9691 32.3764 42.8168 33.0165 42.8168C33.6567 42.8168 34.2168 42.9691 34.6969 43.2738C35.1801 43.5785 35.5556 44.0063 35.8233 44.5572C36.0942 45.1081 36.2296 45.7528 36.2296 46.4915C36.2296 47.224 36.0942 47.8641 35.8233 48.4119C35.5556 48.9598 35.1801 49.386 34.6969 49.6907C34.2168 49.9954 33.6567 50.1477 33.0165 50.1477ZM33.0165 49.169C33.5028 49.169 33.9029 49.0444 34.2168 48.7951C34.5307 48.5458 34.7631 48.218 34.9139 47.8118C35.0647 47.4055 35.1401 46.9654 35.1401 46.4915C35.1401 46.0175 35.0647 45.5759 34.9139 45.1665C34.7631 44.7572 34.5307 44.4264 34.2168 44.174C33.9029 43.9216 33.5028 43.7955 33.0165 43.7955C32.5302 43.7955 32.1301 43.9216 31.8162 44.174C31.5023 44.4264 31.2699 44.7572 31.1191 45.1665C30.9683 45.5759 30.8929 46.0175 30.8929 46.4915C30.8929 46.9654 30.9683 47.4055 31.1191 47.8118C31.2699 48.218 31.5023 48.5458 31.8162 48.7951C32.1301 49.0444 32.5302 49.169 33.0165 49.169ZM40.7733 50.1477C40.1332 50.1477 39.5715 49.9954 39.0883 49.6907C38.6082 49.386 38.2327 48.9598 37.9619 48.4119C37.6942 47.8641 37.5603 47.224 37.5603 46.4915C37.5603 45.7528 37.6942 45.1081 37.9619 44.5572C38.2327 44.0063 38.6082 43.5785 39.0883 43.2738C39.5715 42.9691 40.1332 42.8168 40.7733 42.8168C41.4135 42.8168 41.9736 42.9691 42.4537 43.2738C42.9369 43.5785 43.3124 44.0063 43.5802 44.5572C43.851 45.1081 43.9864 45.7528 43.9864 46.4915C43.9864 47.224 43.851 47.8641 43.5802 48.4119C43.3124 48.9598 42.9369 49.386 42.4537 49.6907C41.9736 49.9954 41.4135 50.1477 40.7733 50.1477ZM40.7733 49.169C41.2596 49.169 41.6597 49.0444 41.9736 48.7951C42.2876 48.5458 42.5199 48.218 42.6707 47.8118C42.8215 47.4055 42.8969 46.9654 42.8969 46.4915C42.8969 46.0175 42.8215 45.5759 42.6707 45.1665C42.5199 44.7572 42.2876 44.4264 41.9736 44.174C41.6597 43.9216 41.2596 43.7955 40.7733 43.7955C40.2871 43.7955 39.887 43.9216 39.5731 44.174C39.2591 44.4264 39.0268 44.7572 38.876 45.1665C38.7252 45.5759 38.6498 46.0175 38.6498 46.4915C38.6498 46.9654 38.7252 47.4055 38.876 47.8118C39.0268 48.218 39.2591 48.5458 39.5731 48.7951C39.887 49.0444 40.2871 49.169 40.7733 49.169ZM50.6722 44.4972L49.6935 44.7741C49.632 44.611 49.5412 44.4525 49.4212 44.2987C49.3042 44.1417 49.1442 44.0124 48.9411 43.9109C48.7379 43.8093 48.4779 43.7585 48.1609 43.7585C47.7269 43.7585 47.3653 43.8585 47.076 44.0586C46.7898 44.2556 46.6467 44.5064 46.6467 44.8111C46.6467 45.0819 46.7451 45.2958 46.9421 45.4528C47.1391 45.6097 47.4469 45.7405 47.8654 45.8452L48.918 46.1037C49.552 46.2576 50.0244 46.493 50.3352 46.81C50.6461 47.1239 50.8015 47.5286 50.8015 48.0241C50.8015 48.4304 50.6845 48.7936 50.4506 49.1136C50.2198 49.4337 49.8967 49.6861 49.4812 49.8707C49.0657 50.0554 48.5825 50.1477 48.0316 50.1477C47.3084 50.1477 46.7098 49.9908 46.2358 49.6768C45.7618 49.3629 45.4618 48.9044 45.3356 48.3011L46.3697 48.0426C46.4682 48.4242 46.6544 48.7105 46.9283 48.9013C47.2053 49.0921 47.5669 49.1875 48.0131 49.1875C48.521 49.1875 48.9241 49.0798 49.2227 48.8643C49.5243 48.6458 49.6751 48.3842 49.6751 48.0795C49.6751 47.8333 49.5889 47.6271 49.4165 47.4609C49.2442 47.2917 48.9795 47.1655 48.6225 47.0824L47.4407 46.8054C46.7913 46.6515 46.3143 46.413 46.0096 46.0898C45.708 45.7636 45.5572 45.3558 45.5572 44.8665C45.5572 44.4664 45.6695 44.1125 45.8942 43.8047C46.1219 43.4969 46.4312 43.2553 46.8221 43.0799C47.216 42.9045 47.6623 42.8168 48.1609 42.8168C48.8626 42.8168 49.4135 42.9706 49.8136 43.2784C50.2167 43.5862 50.503 43.9924 50.6722 44.4972ZM55.4145 50.1477C54.7313 50.1477 54.1419 49.9969 53.6464 49.6953C53.154 49.3906 52.7739 48.9659 52.5061 48.4212C52.2414 47.8733 52.1091 47.2363 52.1091 46.5099C52.1091 45.7836 52.2414 45.1435 52.5061 44.5895C52.7739 44.0324 53.1463 43.5985 53.6233 43.2876C54.1034 42.9737 54.6636 42.8168 55.3037 42.8168C55.673 42.8168 56.0377 42.8783 56.3978 43.0014C56.7579 43.1245 57.0857 43.3246 57.3811 43.6016C57.6766 43.8755 57.912 44.2386 58.0874 44.6911C58.2629 45.1435 58.3506 45.7005 58.3506 46.3622V46.8239H52.8847V45.8821H57.2426C57.2426 45.482 57.1626 45.125 57.0026 44.8111C56.8456 44.4972 56.6209 44.2494 56.3286 44.0678C56.0393 43.8862 55.6977 43.7955 55.3037 43.7955C54.8698 43.7955 54.4943 43.9032 54.1773 44.1186C53.8634 44.331 53.6218 44.608 53.4525 44.9496C53.2832 45.2912 53.1986 45.6574 53.1986 46.0483V46.6761C53.1986 47.2116 53.2909 47.6656 53.4756 48.038C53.6633 48.4073 53.9234 48.6889 54.2558 48.8828C54.5882 49.0736 54.9744 49.169 55.4145 49.169C55.7007 49.169 55.9593 49.129 56.1901 49.049C56.424 48.9659 56.6256 48.8428 56.7948 48.6797C56.9641 48.5135 57.0949 48.3073 57.1872 48.0611L58.2398 48.3565C58.129 48.7135 57.9428 49.0275 57.6812 49.2983C57.4196 49.5661 57.0964 49.7753 56.7117 49.9261C56.327 50.0739 55.8946 50.1477 55.4145 50.1477ZM65.7508 50.1662C65.3015 50.1662 64.8937 50.0816 64.5274 49.9123C64.1612 49.7399 63.8704 49.4922 63.6549 49.169C63.4395 48.8428 63.3318 48.4489 63.3318 47.9872C63.3318 47.581 63.4118 47.2517 63.5718 46.9993C63.7319 46.7438 63.9458 46.5438 64.2135 46.3991C64.4813 46.2545 64.7767 46.1468 65.0999 46.076C65.4261 46.0021 65.7539 45.9437 66.0832 45.9006C66.5141 45.8452 66.8634 45.8036 67.1311 45.7759C67.402 45.7451 67.5989 45.6944 67.722 45.6236C67.8482 45.5528 67.9113 45.4297 67.9113 45.2543V45.2173C67.9113 44.7618 67.7867 44.4079 67.5374 44.1555C67.2912 43.9032 66.9172 43.777 66.4156 43.777C65.8954 43.777 65.4877 43.8909 65.1922 44.1186C64.8968 44.3464 64.689 44.5895 64.569 44.848L63.5349 44.4787C63.7195 44.0478 63.9658 43.7124 64.2735 43.4723C64.5844 43.2292 64.9229 43.0599 65.2892 42.9645C65.6585 42.866 66.0216 42.8168 66.3786 42.8168C66.6064 42.8168 66.868 42.8445 67.1634 42.8999C67.462 42.9522 67.7497 43.0614 68.0267 43.2276C68.3068 43.3938 68.5392 43.6446 68.7238 43.9801C68.9085 44.3156 69.0008 44.7649 69.0008 45.3281V50H67.9113V49.0398H67.8559C67.782 49.1937 67.6589 49.3583 67.4866 49.5337C67.3142 49.7092 67.085 49.8584 66.7987 49.9815C66.5125 50.1046 66.1632 50.1662 65.7508 50.1662ZM65.917 49.1875C66.3479 49.1875 66.711 49.1029 67.0065 48.9336C67.305 48.7643 67.5297 48.5458 67.6805 48.2781C67.8344 48.0103 67.9113 47.7287 67.9113 47.4332V46.4361C67.8651 46.4915 67.7636 46.5423 67.6066 46.5884C67.4527 46.6315 67.2742 46.67 67.0711 46.7038C66.8711 46.7346 66.6756 46.7623 66.4848 46.7869C66.2971 46.8085 66.1447 46.8269 66.0278 46.8423C65.7446 46.8793 65.48 46.9393 65.2338 47.0224C64.9906 47.1024 64.7936 47.224 64.6428 47.3871C64.4951 47.5471 64.4213 47.7656 64.4213 48.0426C64.4213 48.4212 64.5613 48.7074 64.8414 48.9013C65.1245 49.0921 65.483 49.1875 65.917 49.1875ZM72.0788 45.7344V50H70.9893V42.9091H72.0419V44.017H72.1342C72.3004 43.657 72.5528 43.3677 72.8913 43.1491C73.2299 42.9276 73.6669 42.8168 74.2024 42.8168C74.6825 42.8168 75.1026 42.9152 75.4627 43.1122C75.8228 43.3061 76.1029 43.6016 76.3029 43.9986C76.503 44.3925 76.603 44.8911 76.603 45.4943V50H75.5135V45.5682C75.5135 45.0111 75.3688 44.5772 75.0795 44.2663C74.7902 43.9524 74.3932 43.7955 73.8885 43.7955C73.5407 43.7955 73.2299 43.8709 72.956 44.0217C72.6851 44.1725 72.4712 44.3925 72.3143 44.6818C72.1573 44.9711 72.0788 45.322 72.0788 45.7344ZM82.2501 50V42.9091H83.3396V50H82.2501ZM82.8041 41.7273C82.5917 41.7273 82.4086 41.6549 82.2547 41.5103C82.1039 41.3656 82.0285 41.1918 82.0285 40.9886C82.0285 40.7855 82.1039 40.6116 82.2547 40.467C82.4086 40.3223 82.5917 40.25 82.8041 40.25C83.0164 40.25 83.198 40.3223 83.3488 40.467C83.5027 40.6116 83.5796 40.7855 83.5796 40.9886C83.5796 41.1918 83.5027 41.3656 83.3488 41.5103C83.198 41.6549 83.0164 41.7273 82.8041 41.7273ZM88.4189 42.9091V43.8324H84.7441V42.9091H88.4189ZM85.8152 41.2102H86.9047V47.9688C86.9047 48.2765 86.9493 48.5073 87.0385 48.6612C87.1309 48.812 87.2478 48.9136 87.3894 48.9659C87.534 49.0152 87.6864 49.0398 87.8464 49.0398C87.9664 49.0398 88.0649 49.0336 88.1419 49.0213C88.2188 49.0059 88.2804 48.9936 88.3265 48.9844L88.5481 49.9631C88.4743 49.9908 88.3712 50.0185 88.2388 50.0462C88.1065 50.0769 87.9387 50.0923 87.7356 50.0923C87.4279 50.0923 87.1262 50.0262 86.8308 49.8938C86.5384 49.7615 86.2953 49.5599 86.1014 49.2891C85.9106 49.0182 85.8152 48.6766 85.8152 48.2642V41.2102ZM92.9545 50.1477C92.2713 50.1477 91.6819 49.9969 91.1864 49.6953C90.694 49.3906 90.3139 48.9659 90.0462 48.4212C89.7815 47.8733 89.6491 47.2363 89.6491 46.5099C89.6491 45.7836 89.7815 45.1435 90.0462 44.5895C90.3139 44.0324 90.6863 43.5985 91.1634 43.2876C91.6435 42.9737 92.2036 42.8168 92.8438 42.8168C93.2131 42.8168 93.5778 42.8783 93.9379 43.0014C94.2979 43.1245 94.6257 43.3246 94.9212 43.6016C95.2166 43.8755 95.4521 44.2386 95.6275 44.6911C95.8029 45.1435 95.8906 45.7005 95.8906 46.3622V46.8239H90.4247V45.8821H94.7827C94.7827 45.482 94.7027 45.125 94.5426 44.8111C94.3857 44.4972 94.161 44.2494 93.8686 44.0678C93.5793 43.8862 93.2377 43.7955 92.8438 43.7955C92.4098 43.7955 92.0343 43.9032 91.7173 44.1186C91.4034 44.331 91.1618 44.608 90.9925 44.9496C90.8233 45.2912 90.7386 45.6574 90.7386 46.0483V46.6761C90.7386 47.2116 90.831 47.6656 91.0156 48.038C91.2034 48.4073 91.4634 48.6889 91.7958 48.8828C92.1282 49.0736 92.5144 49.169 92.9545 49.169C93.2408 49.169 93.4993 49.129 93.7301 49.049C93.964 48.9659 94.1656 48.8428 94.3349 48.6797C94.5041 48.5135 94.6349 48.3073 94.7273 48.0611L95.7798 48.3565C95.669 48.7135 95.4828 49.0275 95.2212 49.2983C94.9596 49.5661 94.6365 49.7753 94.2518 49.9261C93.8671 50.0739 93.4347 50.1477 92.9545 50.1477ZM97.5479 50V42.9091H98.6005V44.017H98.6928C98.8406 43.6385 99.0791 43.3446 99.4084 43.1353C99.7377 42.9229 100.133 42.8168 100.595 42.8168C101.063 42.8168 101.452 42.9229 101.763 43.1353C102.077 43.3446 102.321 43.6385 102.497 44.017H102.571C102.752 43.6508 103.025 43.36 103.388 43.1445C103.751 42.926 104.186 42.8168 104.694 42.8168C105.328 42.8168 105.847 43.0153 106.25 43.4123C106.653 43.8062 106.855 44.4202 106.855 45.2543V50H105.765V45.2543C105.765 44.7311 105.622 44.3571 105.336 44.1325C105.05 43.9078 104.713 43.7955 104.325 43.7955C103.826 43.7955 103.44 43.9463 103.166 44.2479C102.892 44.5464 102.755 44.925 102.755 45.3835V50H101.647V45.1435C101.647 44.7403 101.517 44.4156 101.255 44.1694C100.993 43.9201 100.656 43.7955 100.244 43.7955C99.9608 43.7955 99.6961 43.8709 99.4499 44.0217C99.2068 44.1725 99.0098 44.3817 98.859 44.6495C98.7113 44.9142 98.6374 45.2204 98.6374 45.5682V50H97.5479ZM115.587 42.9091V43.8324H111.912V42.9091H115.587ZM112.983 41.2102H114.073V47.9688C114.073 48.2765 114.117 48.5073 114.206 48.6612C114.299 48.812 114.416 48.9136 114.557 48.9659C114.702 49.0152 114.854 49.0398 115.014 49.0398C115.134 49.0398 115.233 49.0336 115.31 49.0213C115.387 49.0059 115.448 48.9936 115.494 48.9844L115.716 49.9631C115.642 49.9908 115.539 50.0185 115.407 50.0462C115.274 50.0769 115.107 50.0923 114.904 50.0923C114.596 50.0923 114.294 50.0262 113.999 49.8938C113.706 49.7615 113.463 49.5599 113.269 49.2891C113.079 49.0182 112.983 48.6766 112.983 48.2642V41.2102ZM120.03 50.1477C119.39 50.1477 118.828 49.9954 118.345 49.6907C117.865 49.386 117.49 48.9598 117.219 48.4119C116.951 47.8641 116.817 47.224 116.817 46.4915C116.817 45.7528 116.951 45.1081 117.219 44.5572C117.49 44.0063 117.865 43.5785 118.345 43.2738C118.828 42.9691 119.39 42.8168 120.03 42.8168C120.67 42.8168 121.23 42.9691 121.711 43.2738C122.194 43.5785 122.569 44.0063 122.837 44.5572C123.108 45.1081 123.243 45.7528 123.243 46.4915C123.243 47.224 123.108 47.8641 122.837 48.4119C122.569 48.9598 122.194 49.386 121.711 49.6907C121.23 49.9954 120.67 50.1477 120.03 50.1477ZM120.03 49.169C120.516 49.169 120.917 49.0444 121.23 48.7951C121.544 48.5458 121.777 48.218 121.928 47.8118C122.078 47.4055 122.154 46.9654 122.154 46.4915C122.154 46.0175 122.078 45.5759 121.928 45.1665C121.777 44.7572 121.544 44.4264 121.23 44.174C120.917 43.9216 120.516 43.7955 120.03 43.7955C119.544 43.7955 119.144 43.9216 118.83 44.174C118.516 44.4264 118.284 44.7572 118.133 45.1665C117.982 45.5759 117.907 46.0175 117.907 46.4915C117.907 46.9654 117.982 47.4055 118.133 47.8118C118.284 48.218 118.516 48.5458 118.83 48.7951C119.144 49.0444 119.544 49.169 120.03 49.169ZM131.72 42.9091V43.8324H127.898V42.9091H131.72ZM129.043 50V41.9304C129.043 41.5241 129.138 41.1856 129.329 40.9148C129.52 40.6439 129.767 40.4408 130.072 40.3054C130.377 40.17 130.698 40.1023 131.037 40.1023C131.305 40.1023 131.523 40.1238 131.693 40.1669C131.862 40.21 131.988 40.25 132.071 40.2869L131.757 41.2287C131.702 41.2102 131.625 41.1871 131.526 41.1594C131.431 41.1317 131.305 41.1179 131.148 41.1179C130.788 41.1179 130.528 41.2087 130.368 41.3903C130.211 41.5719 130.132 41.8381 130.132 42.1889V50H129.043ZM135.836 50.1477C135.196 50.1477 134.634 49.9954 134.151 49.6907C133.671 49.386 133.295 48.9598 133.024 48.4119C132.757 47.8641 132.623 47.224 132.623 46.4915C132.623 45.7528 132.757 45.1081 133.024 44.5572C133.295 44.0063 133.671 43.5785 134.151 43.2738C134.634 42.9691 135.196 42.8168 135.836 42.8168C136.476 42.8168 137.036 42.9691 137.516 43.2738C137.999 43.5785 138.375 44.0063 138.643 44.5572C138.914 45.1081 139.049 45.7528 139.049 46.4915C139.049 47.224 138.914 47.8641 138.643 48.4119C138.375 48.9598 137.999 49.386 137.516 49.6907C137.036 49.9954 136.476 50.1477 135.836 50.1477ZM135.836 49.169C136.322 49.169 136.722 49.0444 137.036 48.7951C137.35 48.5458 137.582 48.218 137.733 47.8118C137.884 47.4055 137.959 46.9654 137.959 46.4915C137.959 46.0175 137.884 45.5759 137.733 45.1665C137.582 44.7572 137.35 44.4264 137.036 44.174C136.722 43.9216 136.322 43.7955 135.836 43.7955C135.35 43.7955 134.949 43.9216 134.636 44.174C134.322 44.4264 134.089 44.7572 133.938 45.1665C133.788 45.5759 133.712 46.0175 133.712 46.4915C133.712 46.9654 133.788 47.4055 133.938 47.8118C134.089 48.218 134.322 48.5458 134.636 48.7951C134.949 49.0444 135.35 49.169 135.836 49.169ZM143.593 50.1477C142.928 50.1477 142.355 49.9908 141.875 49.6768C141.395 49.3629 141.026 48.9305 140.767 48.3796C140.509 47.8287 140.38 47.1993 140.38 46.4915C140.38 45.7713 140.512 45.1358 140.777 44.5849C141.044 44.0309 141.417 43.5985 141.894 43.2876C142.374 42.9737 142.934 42.8168 143.574 42.8168C144.073 42.8168 144.522 42.9091 144.922 43.0938C145.322 43.2784 145.65 43.5369 145.906 43.8693C146.161 44.2017 146.319 44.5895 146.381 45.0327H145.292C145.208 44.7095 145.024 44.4233 144.738 44.174C144.454 43.9216 144.073 43.7955 143.593 43.7955C143.168 43.7955 142.796 43.9062 142.475 44.1278C142.158 44.3464 141.911 44.6557 141.732 45.0558C141.557 45.4528 141.469 45.919 141.469 46.4545C141.469 47.0024 141.555 47.4794 141.728 47.8857C141.903 48.2919 142.149 48.6074 142.466 48.832C142.786 49.0567 143.162 49.169 143.593 49.169C143.876 49.169 144.133 49.1198 144.364 49.0213C144.594 48.9228 144.79 48.7812 144.95 48.5966C145.11 48.4119 145.224 48.1903 145.292 47.9318H146.381C146.319 48.3504 146.167 48.7274 145.924 49.0629C145.684 49.3952 145.365 49.6599 144.968 49.8569C144.574 50.0508 144.116 50.1477 143.593 50.1477ZM152.442 47.1009V42.9091H153.532V50H152.442V48.7997H152.369C152.202 49.1598 151.944 49.466 151.593 49.7184C151.242 49.9677 150.799 50.0923 150.263 50.0923C149.82 50.0923 149.426 49.9954 149.082 49.8015C148.737 49.6045 148.466 49.3091 148.269 48.9151C148.072 48.5181 147.974 48.018 147.974 47.4148V42.9091H149.063V47.3409C149.063 47.858 149.208 48.2704 149.497 48.5781C149.79 48.8859 150.162 49.0398 150.614 49.0398C150.885 49.0398 151.161 48.9705 151.441 48.832C151.724 48.6935 151.961 48.4812 152.152 48.195C152.346 47.9087 152.442 47.544 152.442 47.1009ZM160.55 44.4972L159.571 44.7741C159.51 44.611 159.419 44.4525 159.299 44.2987C159.182 44.1417 159.022 44.0124 158.819 43.9109C158.616 43.8093 158.356 43.7585 158.039 43.7585C157.605 43.7585 157.243 43.8585 156.954 44.0586C156.668 44.2556 156.525 44.5064 156.525 44.8111C156.525 45.0819 156.623 45.2958 156.82 45.4528C157.017 45.6097 157.325 45.7405 157.743 45.8452L158.796 46.1037C159.43 46.2576 159.902 46.493 160.213 46.81C160.524 47.1239 160.679 47.5286 160.679 48.0241C160.679 48.4304 160.562 48.7936 160.329 49.1136C160.098 49.4337 159.775 49.6861 159.359 49.8707C158.944 50.0554 158.46 50.1477 157.91 50.1477C157.186 50.1477 156.588 49.9908 156.114 49.6768C155.64 49.3629 155.34 48.9044 155.214 48.3011L156.248 48.0426C156.346 48.4242 156.532 48.7105 156.806 48.9013C157.083 49.0921 157.445 49.1875 157.891 49.1875C158.399 49.1875 158.802 49.0798 159.101 48.8643C159.402 48.6458 159.553 48.3842 159.553 48.0795C159.553 47.8333 159.467 47.6271 159.294 47.4609C159.122 47.2917 158.857 47.1655 158.5 47.0824L157.319 46.8054C156.669 46.6515 156.192 46.413 155.888 46.0898C155.586 45.7636 155.435 45.3558 155.435 44.8665C155.435 44.4664 155.547 44.1125 155.772 43.8047C156 43.4969 156.309 43.2553 156.7 43.0799C157.094 42.9045 157.54 42.8168 158.039 42.8168C158.741 42.8168 159.291 42.9706 159.691 43.2784C160.095 43.5862 160.381 43.9924 160.55 44.4972ZM168.856 50.1477C168.216 50.1477 167.655 49.9954 167.171 49.6907C166.691 49.386 166.316 48.9598 166.045 48.4119C165.777 47.8641 165.643 47.224 165.643 46.4915C165.643 45.7528 165.777 45.1081 166.045 44.5572C166.316 44.0063 166.691 43.5785 167.171 43.2738C167.655 42.9691 168.216 42.8168 168.856 42.8168C169.497 42.8168 170.057 42.9691 170.537 43.2738C171.02 43.5785 171.395 44.0063 171.663 44.5572C171.934 45.1081 172.069 45.7528 172.069 46.4915C172.069 47.224 171.934 47.8641 171.663 48.4119C171.395 48.9598 171.02 49.386 170.537 49.6907C170.057 49.9954 169.497 50.1477 168.856 50.1477ZM168.856 49.169C169.343 49.169 169.743 49.0444 170.057 48.7951C170.371 48.5458 170.603 48.218 170.754 47.8118C170.905 47.4055 170.98 46.9654 170.98 46.4915C170.98 46.0175 170.905 45.5759 170.754 45.1665C170.603 44.7572 170.371 44.4264 170.057 44.174C169.743 43.9216 169.343 43.7955 168.856 43.7955C168.37 43.7955 167.97 43.9216 167.656 44.174C167.342 44.4264 167.11 44.7572 166.959 45.1665C166.808 45.5759 166.733 46.0175 166.733 46.4915C166.733 46.9654 166.808 47.4055 166.959 47.8118C167.11 48.218 167.342 48.5458 167.656 48.7951C167.97 49.0444 168.37 49.169 168.856 49.169ZM174.822 45.7344V50H173.733V42.9091H174.785V44.017H174.877C175.044 43.657 175.296 43.3677 175.634 43.1491C175.973 42.9276 176.41 42.8168 176.946 42.8168C177.426 42.8168 177.846 42.9152 178.206 43.1122C178.566 43.3061 178.846 43.6016 179.046 43.9986C179.246 44.3925 179.346 44.8911 179.346 45.4943V50H178.257V45.5682C178.257 45.0111 178.112 44.5772 177.823 44.2663C177.533 43.9524 177.136 43.7955 176.632 43.7955C176.284 43.7955 175.973 43.8709 175.699 44.0217C175.428 44.1725 175.214 44.3925 175.057 44.6818C174.9 44.9711 174.822 45.322 174.822 45.7344Z"/>
<rect id="top-container" width="600" height="24" rx="6" fill="var(--vscode-quickInputTitle-background)"/>
<path id="top-label" fill="var(--vscode-quickInput-foreground)" d="M221.642 10.5323C221.553 10.2522 221.433 10.0014 221.282 9.77983C221.134 9.55516 220.957 9.36435 220.751 9.20739C220.545 9.04735 220.31 8.92578 220.045 8.84268C219.783 8.75959 219.496 8.71804 219.182 8.71804C218.649 8.71804 218.169 8.855 217.741 9.12891C217.314 9.40282 216.975 9.80445 216.726 10.3338C216.479 10.8601 216.356 11.5049 216.356 12.2681C216.356 13.0344 216.481 13.6823 216.73 14.2116C216.98 14.741 217.321 15.1426 217.755 15.4165C218.189 15.6905 218.683 15.8274 219.237 15.8274C219.751 15.8274 220.199 15.7228 220.58 15.5135C220.965 15.3042 221.262 15.0088 221.471 14.6271C221.684 14.2424 221.79 13.79 221.79 13.2699L222.159 13.3391H219.454V12.1619H223.17V13.2376C223.17 14.0316 223.001 14.721 222.662 15.3058C222.327 15.8874 221.862 16.3368 221.268 16.6538C220.677 16.9708 220 17.1293 219.237 17.1293C218.381 17.1293 217.631 16.9323 216.984 16.5384C216.341 16.1444 215.839 15.5858 215.479 14.8626C215.119 14.1362 214.939 13.2745 214.939 12.2773C214.939 11.5233 215.044 10.8462 215.253 10.2461C215.462 9.64595 215.756 9.1366 216.135 8.71804C216.516 8.2964 216.964 7.97479 217.478 7.7532C217.995 7.52853 218.56 7.41619 219.172 7.41619C219.683 7.41619 220.159 7.4916 220.599 7.6424C221.042 7.79321 221.436 8.0071 221.781 8.28409C222.128 8.56108 222.416 8.89039 222.644 9.27202C222.872 9.65057 223.026 10.0707 223.106 10.5323H221.642ZM225.315 17V9.90909H226.695V17H225.315ZM226.012 8.81499C225.772 8.81499 225.565 8.73497 225.393 8.57493C225.224 8.41181 225.139 8.21792 225.139 7.99325C225.139 7.76551 225.224 7.57161 225.393 7.41158C225.565 7.24846 225.772 7.1669 226.012 7.1669C226.252 7.1669 226.456 7.24846 226.626 7.41158C226.798 7.57161 226.884 7.76551 226.884 7.99325C226.884 8.21792 226.798 8.41181 226.626 8.57493C226.456 8.73497 226.252 8.81499 226.012 8.81499ZM231.862 9.90909V11.017H227.989V9.90909H231.862ZM229.027 8.21023H230.408V14.918C230.408 15.1857 230.448 15.3873 230.528 15.5227C230.608 15.6551 230.711 15.7459 230.837 15.7951C230.966 15.8413 231.106 15.8643 231.257 15.8643C231.368 15.8643 231.465 15.8567 231.548 15.8413C231.631 15.8259 231.696 15.8136 231.742 15.8043L231.991 16.9446C231.911 16.9754 231.797 17.0062 231.65 17.0369C231.502 17.0708 231.317 17.0893 231.096 17.0923C230.732 17.0985 230.394 17.0339 230.08 16.8984C229.766 16.763 229.512 16.5537 229.318 16.2706C229.124 15.9875 229.027 15.632 229.027 15.2042V8.21023ZM233.652 17V7.54545H235.078V15.772H239.363V17H233.652ZM243.935 17.1431C243.237 17.1431 242.635 16.9938 242.13 16.6953C241.628 16.3937 241.241 15.9705 240.967 15.4258C240.696 14.878 240.561 14.2363 240.561 13.5007C240.561 12.7744 240.696 12.1342 240.967 11.5803C241.241 11.0263 241.622 10.5939 242.112 10.283C242.604 9.97218 243.18 9.81676 243.838 9.81676C244.238 9.81676 244.626 9.88293 245.002 10.0153C245.377 10.1476 245.714 10.3554 246.013 10.6385C246.311 10.9216 246.547 11.2894 246.719 11.7418C246.891 12.1912 246.977 12.7375 246.977 13.3807V13.87H241.341V12.8359H245.625C245.625 12.4728 245.551 12.1512 245.403 11.8711C245.256 11.5879 245.048 11.3648 244.78 11.2017C244.515 11.0386 244.204 10.957 243.847 10.957C243.46 10.957 243.121 11.0524 242.832 11.2433C242.546 11.431 242.324 11.6772 242.167 11.9819C242.013 12.2835 241.936 12.6113 241.936 12.9652V13.7731C241.936 14.247 242.019 14.6502 242.186 14.9826C242.355 15.315 242.59 15.5689 242.892 15.7443C243.193 15.9167 243.546 16.0028 243.949 16.0028C244.211 16.0028 244.449 15.9659 244.665 15.892C244.88 15.8151 245.066 15.7012 245.223 15.5504C245.38 15.3996 245.5 15.2134 245.583 14.9918L246.89 15.2273C246.785 15.612 246.597 15.949 246.327 16.2383C246.059 16.5245 245.722 16.7476 245.316 16.9077C244.912 17.0646 244.452 17.1431 243.935 17.1431ZM249.889 12.7898V17H248.509V9.90909H249.834V11.0632H249.922C250.085 10.6877 250.34 10.3861 250.688 10.1584C251.039 9.93063 251.48 9.81676 252.013 9.81676C252.496 9.81676 252.919 9.91832 253.282 10.1214C253.646 10.3215 253.927 10.62 254.127 11.017C254.327 11.4141 254.427 11.9049 254.427 12.4897V17H253.047V12.6559C253.047 12.1419 252.913 11.7403 252.645 11.451C252.378 11.1586 252.01 11.0124 251.542 11.0124C251.222 11.0124 250.937 11.0817 250.688 11.2202C250.442 11.3587 250.246 11.5618 250.102 11.8295C249.96 12.0942 249.889 12.4143 249.889 12.7898ZM261.592 11.6403L260.341 11.8619C260.289 11.7018 260.206 11.5495 260.092 11.4048C259.981 11.2602 259.83 11.1417 259.639 11.0494C259.448 10.957 259.21 10.9109 258.924 10.9109C258.533 10.9109 258.207 10.9986 257.945 11.174C257.683 11.3464 257.553 11.5695 257.553 11.8434C257.553 12.0804 257.64 12.2712 257.816 12.4158C257.991 12.5605 258.274 12.679 258.665 12.7713L259.792 13.0298C260.444 13.1806 260.93 13.413 261.25 13.7269C261.571 14.0408 261.731 14.4486 261.731 14.9503C261.731 15.375 261.607 15.7536 261.361 16.0859C261.118 16.4152 260.778 16.6738 260.341 16.8615C259.907 17.0492 259.404 17.1431 258.831 17.1431C258.037 17.1431 257.39 16.9738 256.888 16.6353C256.386 16.2937 256.078 15.8089 255.965 15.1811L257.299 14.978C257.382 15.3258 257.553 15.5889 257.811 15.7674C258.07 15.9428 258.407 16.0305 258.822 16.0305C259.275 16.0305 259.636 15.9367 259.907 15.7489C260.178 15.5581 260.313 15.3258 260.313 15.0518C260.313 14.8303 260.23 14.6441 260.064 14.4933C259.901 14.3424 259.65 14.2286 259.312 14.1516L258.111 13.8885C257.45 13.7377 256.96 13.4976 256.643 13.1683C256.329 12.839 256.172 12.422 256.172 11.9173C256.172 11.4987 256.289 11.1325 256.523 10.8185C256.757 10.5046 257.08 10.2599 257.493 10.0845C257.905 9.90601 258.377 9.81676 258.91 9.81676C259.676 9.81676 260.279 9.98295 260.72 10.3153C261.16 10.6446 261.45 11.0863 261.592 11.6403ZM266.799 17V7.54545H268.226V15.772H272.51V17H266.799ZM276.09 17.157C275.641 17.157 275.235 17.0739 274.871 16.9077C274.508 16.7384 274.22 16.4937 274.008 16.1737C273.799 15.8536 273.694 15.4612 273.694 14.9964C273.694 14.5964 273.771 14.267 273.925 14.0085C274.079 13.75 274.287 13.5453 274.548 13.3945C274.81 13.2437 275.102 13.1299 275.425 13.0529C275.748 12.976 276.078 12.9175 276.413 12.8775C276.838 12.8282 277.183 12.7882 277.447 12.7575C277.712 12.7236 277.904 12.6697 278.024 12.5959C278.144 12.522 278.204 12.402 278.204 12.2358V12.2035C278.204 11.8003 278.091 11.4879 277.863 11.2663C277.638 11.0447 277.303 10.9339 276.856 10.9339C276.392 10.9339 276.025 11.037 275.758 11.2433C275.493 11.4464 275.31 11.6726 275.208 11.9219L273.911 11.6264C274.065 11.1955 274.29 10.8478 274.585 10.5831C274.884 10.3153 275.227 10.1214 275.615 10.0014C276.002 9.87831 276.41 9.81676 276.838 9.81676C277.121 9.81676 277.421 9.85062 277.738 9.91832C278.058 9.98295 278.357 10.103 278.634 10.2784C278.914 10.4538 279.143 10.7047 279.322 11.0309C279.5 11.354 279.589 11.7741 279.589 12.2912V17H278.241V16.0305H278.186C278.097 16.209 277.963 16.3845 277.784 16.5568C277.606 16.7292 277.377 16.8723 277.097 16.9862C276.816 17.1 276.481 17.157 276.09 17.157ZM276.39 16.049C276.772 16.049 277.098 15.9736 277.369 15.8228C277.643 15.672 277.851 15.475 277.992 15.2319C278.137 14.9857 278.209 14.7225 278.209 14.4425V13.5284C278.16 13.5777 278.064 13.6238 277.923 13.6669C277.784 13.7069 277.626 13.7423 277.447 13.7731C277.269 13.8008 277.095 13.8269 276.926 13.8516C276.756 13.8731 276.615 13.8916 276.501 13.907C276.233 13.9408 275.989 13.9978 275.767 14.0778C275.548 14.1578 275.373 14.2732 275.241 14.424C275.111 14.5717 275.047 14.7687 275.047 15.0149C275.047 15.3565 275.173 15.6151 275.425 15.7905C275.678 15.9628 275.999 16.049 276.39 16.049ZM285.92 14.0593V9.90909H287.305V17H285.947V15.772H285.874C285.71 16.1506 285.449 16.466 285.089 16.7184C284.732 16.9677 284.287 17.0923 283.755 17.0923C283.299 17.0923 282.896 16.9923 282.545 16.7923C282.197 16.5891 281.923 16.2891 281.723 15.892C281.526 15.495 281.428 15.0041 281.428 14.4194V9.90909H282.808V14.2532C282.808 14.7364 282.942 15.1211 283.21 15.4073C283.478 15.6935 283.825 15.8366 284.253 15.8366C284.512 15.8366 284.769 15.772 285.024 15.6428C285.283 15.5135 285.497 15.3181 285.666 15.0565C285.838 14.7949 285.923 14.4625 285.92 14.0593ZM290.54 12.7898V17H289.159V9.90909H290.484V11.0632H290.572C290.735 10.6877 290.991 10.3861 291.338 10.1584C291.689 9.93063 292.131 9.81676 292.663 9.81676C293.146 9.81676 293.57 9.91832 293.933 10.1214C294.296 10.3215 294.578 10.62 294.778 11.017C294.978 11.4141 295.078 11.9049 295.078 12.4897V17H293.697V12.6559C293.697 12.1419 293.563 11.7403 293.296 11.451C293.028 11.1586 292.66 11.0124 292.192 11.0124C291.872 11.0124 291.588 11.0817 291.338 11.2202C291.092 11.3587 290.897 11.5618 290.752 11.8295C290.61 12.0942 290.54 12.4143 290.54 12.7898ZM299.916 17.1431C299.229 17.1431 298.639 16.9877 298.143 16.6768C297.651 16.3629 297.272 15.9305 297.007 15.3796C296.743 14.8287 296.61 14.1978 296.61 13.4869C296.61 12.7667 296.746 12.1312 297.017 11.5803C297.287 11.0263 297.669 10.5939 298.161 10.283C298.654 9.97218 299.234 9.81676 299.902 9.81676C300.44 9.81676 300.921 9.91679 301.342 10.1168C301.764 10.3138 302.104 10.5908 302.362 10.9478C302.624 11.3048 302.78 11.7218 302.829 12.1989H301.485C301.411 11.8665 301.242 11.5803 300.978 11.3402C300.716 11.1001 300.365 10.9801 299.925 10.9801C299.54 10.9801 299.203 11.0817 298.914 11.2848C298.628 11.4848 298.405 11.7711 298.245 12.1435C298.085 12.5128 298.005 12.9498 298.005 13.4545C298.005 13.9716 298.083 14.4179 298.24 14.7933C298.397 15.1688 298.619 15.4596 298.905 15.6658C299.194 15.872 299.534 15.9751 299.925 15.9751C300.187 15.9751 300.424 15.9274 300.636 15.832C300.851 15.7335 301.031 15.5935 301.176 15.4119C301.324 15.2304 301.427 15.0118 301.485 14.7564H302.829C302.78 15.215 302.63 15.6243 302.381 15.9844C302.132 16.3445 301.798 16.6276 301.379 16.8338C300.964 17.04 300.476 17.1431 299.916 17.1431ZM305.685 12.7898V17H304.305V7.54545H305.667V11.0632H305.754C305.921 10.6816 306.175 10.3784 306.516 10.1538C306.858 9.9291 307.304 9.81676 307.855 9.81676C308.341 9.81676 308.766 9.91679 309.129 10.1168C309.495 10.3169 309.778 10.6154 309.979 11.0124C310.182 11.4064 310.283 11.8988 310.283 12.4897V17H308.903V12.6559C308.903 12.1358 308.769 11.7326 308.501 11.4464C308.233 11.1571 307.861 11.0124 307.384 11.0124C307.058 11.0124 306.765 11.0817 306.507 11.2202C306.251 11.3587 306.05 11.5618 305.902 11.8295C305.758 12.0942 305.685 12.4143 305.685 12.7898ZM312.125 19.6591V9.90909H313.473V11.0586H313.589C313.669 10.9109 313.784 10.7401 313.935 10.5462C314.086 10.3523 314.295 10.183 314.563 10.0384C314.83 9.89062 315.184 9.81676 315.624 9.81676C316.197 9.81676 316.708 9.96141 317.157 10.2507C317.606 10.54 317.959 10.957 318.214 11.5018C318.473 12.0465 318.602 12.7021 318.602 13.4684C318.602 14.2347 318.474 14.8918 318.219 15.4396C317.963 15.9844 317.613 16.4045 317.166 16.6999C316.72 16.9923 316.211 17.1385 315.638 17.1385C315.207 17.1385 314.855 17.0662 314.581 16.9215C314.31 16.7769 314.098 16.6076 313.944 16.4137C313.79 16.2198 313.672 16.0475 313.589 15.8967H313.506V19.6591H312.125ZM313.478 13.4545C313.478 13.9531 313.55 14.3902 313.695 14.7656C313.839 15.1411 314.049 15.435 314.323 15.6474C314.597 15.8567 314.932 15.9613 315.329 15.9613C315.741 15.9613 316.086 15.852 316.363 15.6335C316.64 15.4119 316.849 15.1119 316.991 14.7333C317.136 14.3548 317.208 13.9285 317.208 13.4545C317.208 12.9867 317.137 12.5666 316.996 12.1942C316.857 11.8219 316.648 11.5279 316.368 11.3125C316.091 11.0971 315.744 10.9893 315.329 10.9893C314.929 10.9893 314.59 11.0924 314.313 11.2987C314.039 11.5049 313.832 11.7926 313.69 12.1619C313.549 12.5312 313.478 12.9621 313.478 13.4545ZM322.212 17.157C321.763 17.157 321.357 17.0739 320.993 16.9077C320.63 16.7384 320.343 16.4937 320.13 16.1737C319.921 15.8536 319.816 15.4612 319.816 14.9964C319.816 14.5964 319.893 14.267 320.047 14.0085C320.201 13.75 320.409 13.5453 320.67 13.3945C320.932 13.2437 321.224 13.1299 321.547 13.0529C321.871 12.976 322.2 12.9175 322.535 12.8775C322.96 12.8282 323.305 12.7882 323.569 12.7575C323.834 12.7236 324.026 12.6697 324.146 12.5959C324.267 12.522 324.327 12.402 324.327 12.2358V12.2035C324.327 11.8003 324.213 11.4879 323.985 11.2663C323.76 11.0447 323.425 10.9339 322.979 10.9339C322.514 10.9339 322.148 11.037 321.88 11.2433C321.615 11.4464 321.432 11.6726 321.33 11.9219L320.033 11.6264C320.187 11.1955 320.412 10.8478 320.707 10.5831C321.006 10.3153 321.349 10.1214 321.737 10.0014C322.124 9.87831 322.532 9.81676 322.96 9.81676C323.243 9.81676 323.543 9.85062 323.86 9.91832C324.18 9.98295 324.479 10.103 324.756 10.2784C325.036 10.4538 325.265 10.7047 325.444 11.0309C325.622 11.354 325.711 11.7741 325.711 12.2912V17H324.363V16.0305H324.308C324.219 16.209 324.085 16.3845 323.906 16.5568C323.728 16.7292 323.499 16.8723 323.219 16.9862C322.939 17.1 322.603 17.157 322.212 17.157ZM322.512 16.049C322.894 16.049 323.22 15.9736 323.491 15.8228C323.765 15.672 323.973 15.475 324.114 15.2319C324.259 14.9857 324.331 14.7225 324.331 14.4425V13.5284C324.282 13.5777 324.186 13.6238 324.045 13.6669C323.906 13.7069 323.748 13.7423 323.569 13.7731C323.391 13.8008 323.217 13.8269 323.048 13.8516C322.878 13.8731 322.737 13.8916 322.623 13.907C322.355 13.9408 322.111 13.9978 321.889 14.0778C321.671 14.1578 321.495 14.2732 321.363 14.424C321.233 14.5717 321.169 14.7687 321.169 15.0149C321.169 15.3565 321.295 15.6151 321.547 15.7905C321.8 15.9628 322.121 16.049 322.512 16.049ZM330.204 17.1385C329.632 17.1385 329.121 16.9923 328.672 16.6999C328.226 16.4045 327.875 15.9844 327.619 15.4396C327.367 14.8918 327.241 14.2347 327.241 13.4684C327.241 12.7021 327.368 12.0465 327.624 11.5018C327.882 10.957 328.236 10.54 328.686 10.2507C329.135 9.96141 329.644 9.81676 330.214 9.81676C330.654 9.81676 331.008 9.89062 331.275 10.0384C331.546 10.183 331.756 10.3523 331.903 10.5462C332.054 10.7401 332.171 10.9109 332.254 11.0586H332.337V7.54545H333.718V17H332.37V15.8967H332.254C332.171 16.0475 332.051 16.2198 331.894 16.4137C331.74 16.6076 331.528 16.7769 331.257 16.9215C330.986 17.0662 330.635 17.1385 330.204 17.1385ZM330.509 15.9613C330.906 15.9613 331.242 15.8567 331.516 15.6474C331.793 15.435 332.002 15.1411 332.143 14.7656C332.288 14.3902 332.36 13.9531 332.36 13.4545C332.36 12.9621 332.29 12.5312 332.148 12.1619C332.006 11.7926 331.799 11.5049 331.525 11.2987C331.251 11.0924 330.912 10.9893 330.509 10.9893C330.094 10.9893 329.747 11.0971 329.47 11.3125C329.193 11.5279 328.984 11.8219 328.843 12.1942C328.704 12.5666 328.635 12.9867 328.635 13.4545C328.635 13.9285 328.706 14.3548 328.847 14.7333C328.989 15.1119 329.198 15.4119 329.475 15.6335C329.755 15.852 330.1 15.9613 330.509 15.9613ZM341.307 10.032C342.261 10.032 342.954 10.214 343.387 10.578C343.829 10.942 344.05 11.4577 344.05 12.125C344.05 12.515 343.959 12.879 343.777 13.217C343.595 13.555 343.292 13.8323 342.867 14.049C342.451 14.257 341.875 14.361 341.138 14.361H340.475V17H339.318V10.032H341.307ZM341.229 10.955H340.475V13.438H341.034C341.45 13.438 341.793 13.399 342.061 13.321C342.339 13.2343 342.542 13.0957 342.672 12.905C342.802 12.7143 342.867 12.4673 342.867 12.164C342.867 11.7567 342.733 11.4533 342.464 11.254C342.204 11.0547 341.793 10.955 341.229 10.955ZM348.4 13.6392H349.965L351.964 17H350.399L348.4 13.6392ZM345.875 10.1307H348.862C349.444 10.1307 349.941 10.2245 350.353 10.4123C350.769 10.6 351.086 10.8585 351.304 11.1879C351.523 11.5172 351.632 11.8911 351.632 12.3097C351.632 12.719 351.524 13.0852 351.309 13.4084C351.096 13.7285 350.79 13.9824 350.39 14.1701C349.993 14.3548 349.516 14.4471 348.959 14.4471H346.905V13.3299H348.959C349.368 13.3299 349.667 13.2253 349.854 13.016C350.045 12.8067 350.141 12.5774 350.141 12.3281C350.141 12.0758 350.039 11.8434 349.836 11.631C349.633 11.4156 349.308 11.3079 348.862 11.3079H347.366V17H345.875V10.1307ZM358.395 17H354.222V10.032H358.395V10.968H355.379V12.905H358.213V13.828H355.379V16.064H358.395V17ZM361.63 17L359.147 10.032H360.304L361.695 14.14C361.765 14.3307 361.834 14.543 361.903 14.777C361.973 15.011 362.038 15.2363 362.098 15.453C362.159 15.661 362.198 15.8387 362.215 15.986H362.267C362.302 15.8387 362.35 15.6567 362.41 15.44C362.471 15.2233 362.54 14.998 362.618 14.764C362.696 14.53 362.766 14.322 362.826 14.14L364.217 10.032H365.374L362.865 17H361.63ZM369.643 10.1307V11.3217H366.241V10.1307H369.643ZM368.674 10.1307V17H367.178V10.1307H368.674ZM369.643 15.8043V17H366.241V15.8043H369.643ZM375.788 17H371.615V10.032H375.788V10.968H372.772V12.905H375.606V13.828H372.772V16.064H375.788V17ZM378.399 17L376.67 10.032H377.736L378.607 13.75C378.65 13.9407 378.694 14.1313 378.737 14.322C378.78 14.5127 378.819 14.7033 378.854 14.894C378.897 15.076 378.932 15.2493 378.958 15.414C378.993 15.57 379.014 15.7087 379.023 15.83H379.075C379.092 15.726 379.114 15.596 379.14 15.44C379.175 15.284 379.209 15.1193 379.244 14.946C379.287 14.7727 379.331 14.5993 379.374 14.426C379.417 14.2527 379.456 14.0967 379.491 13.958L380.609 10.032H381.74L382.832 13.958C382.875 14.1053 382.914 14.2613 382.949 14.426C382.992 14.5907 383.036 14.7597 383.079 14.933C383.122 15.0977 383.157 15.258 383.183 15.414C383.218 15.5613 383.239 15.6957 383.248 15.817H383.3C383.317 15.713 383.339 15.583 383.365 15.427C383.391 15.271 383.421 15.102 383.456 14.92C383.499 14.738 383.543 14.5473 383.586 14.348C383.629 14.1487 383.677 13.9493 383.729 13.75L384.613 10.032H385.666L383.911 17H382.702L381.61 13.074C381.558 12.892 381.51 12.71 381.467 12.528C381.424 12.3373 381.38 12.1553 381.337 11.982C381.294 11.8087 381.259 11.657 381.233 11.527C381.207 11.3883 381.19 11.2887 381.181 11.228H381.129C381.12 11.2887 381.103 11.3883 381.077 11.527C381.051 11.657 381.021 11.8087 380.986 11.982C380.951 12.1553 380.908 12.3373 380.856 12.528C380.813 12.7187 380.765 12.905 380.713 13.087L379.582 17H378.399Z"/>
<defs>
<clipPath id="clip0_46_2">
<rect width="16" height="16" fill="white" transform="translate(398 86)"/>
</clipPath>
<clipPath id="clip1_46_2">
<rect width="16" height="16" fill="white" transform="translate(16 87)"/>
</clipPath>
<clipPath id="clip2_46_2">
<rect width="16" height="16" fill="white" transform="translate(366 154)"/>
</clipPath>
<clipPath id="clip3_46_2">
<rect width="16" height="16" fill="white" transform="translate(16 155)"/>
</clipPath>
</defs>
</svg>`}};Dn.styles=[Ln,_e`
			:host > svg {
				border: none;
			}
		`],Dn=((e,t,o,i)=>{for(var s,r=i>1?void 0:i?An(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Rn(t,o,r),r})([xt("gk-launchpad-quickpick-svg")],Dn);var On=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,Tn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Fn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&On(t,o,r),r};let En=class extends lit_element_s{render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg width="600" height="44" viewBox="0 0 600 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<clipPath id="clip-left">
						<rect x="0" y="0" width="279" height="100%"></rect>
					</clipPath>
				</defs>

				<g class="revision-left">
					<rect class="removed-line" x="28" y="21" width="251" height="21"></rect>
					<rect class="added-line" x="311" y="21" width="309" height="21"></rect>
					<!-- <rect class="added-text" x="433" y="21" width="38" height="21"></rect> -->
					<rect class="line-current" x="0" y="21" width="calc(100% - 1px)" height="21"></rect>
					<g class="line line-left" style="clip-path: url(#clip-left)">
						<text y="14"><tspan x="7" class="line-number">12</tspan><tspan x="40" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan></text>
						<text y="36"><tspan x="7" class="line-number">13</tspan><tspan x="40" dx="24" class="function-return">return</tspan><tspan dx="6" class="function-name">supercharged</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan></text>
					</g>
					<line class="splitter" x1="280" y1="0" x2="280" y2="100%" />
				</g>
				<g class="revision-right">
					<g class="line line-right">
						<text y="14"><tspan x="290" class="line-number">12</tspan><tspan x="323" class="function-declaration">function</tspan><tspan dx="6" class="function-name">gitlens</tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">:</tspan><tspan dx="6" class="function-argument-type">object</tspan><tspan class="punctuation">)</tspan><tspan dx="6" class="punctuation">{</tspan></text>
						<text y="36"><tspan x="290" class="line-number-active">13</tspan><tspan x="323" dx="24" class="function-return">return</tspan><tspan dx="6" class="function-name"><tspan>super</tspan><tspan class="added-text">DuperC</tspan><tspan>harged</tspan></tspan><tspan class="punctuation">(</tspan><tspan class="function-argument">git</tspan><tspan class="punctuation">)</tspan><tspan class="punctuation">;</tspan><tspan class="cursor">|</tspan></text>
					</g>
				</g>
			</svg>
		`}};En.styles=_e`
		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.codicon {
			font-family: codicon;
			cursor: default;
			user-select: none;
		}

		.glicon {
			font-family: glicons;
			cursor: default;
			user-select: none;
		}

		.line text {
			font-family: var(--vscode-editor-font-family);
			font-size: var(--vscode-editor-font-size);
			font-weight: var(--vscode-editor-font-weight);
		}

		.cursor {
			fill: var(--vscode-editorCursor-foreground);
		}

		.punctuation {
			fill: var(--vscode-editor-foreground);
		}

		.function-declaration {
			fill: var(--vscode-symbolIcon-functionForeground);
		}

		.function-name {
			fill: var(--vscode-symbolIcon-colorForeground);
		}

		.function-argument {
			fill: var(--vscode-symbolIcon-variableForeground);
		}

		.function-argument-type {
			fill: var(--vscode-symbolIcon-typeParameterForeground);
		}

		.function-return {
			fill: var(--vscode-debugTokenExpression-name);
		}

		.line-current {
			fill: var(--vscode-editor-lineHighlightBackground);
			stroke: var(--vscode-editor-lineHighlightBorder);
			stroke-width: 0.1rem;
			fill-opacity: 0.8;
		}

		.line-number {
			fill: var(--vscode-editorLineNumber-foreground);
		}

		.line-number-active {
			fill: var(--vscode-editorLineNumber-activeForeground);
		}

		.splitter {
			stroke: var(--vscode-editorGroup-border);
		}

		.added-line {
			fill: var(--vscode-diffEditor-insertedLineBackground);
		}

		.removed-line {
			fill: var(--vscode-diffEditor-removedLineBackground);
		}

		.added-text {
			outline: 1px solid green;
			fill: green;
		}

		.revision-left {
			transition: opacity 150ms ease-in-out;
		}

		.revision-right {
			transition: transform 150ms ease-in-out;
		}

		:host(:not([toggled])) .revision-left {
			opacity: 0;
		}
		:host(:not([toggled])) .revision-right {
			transform: translateX(-283px);
		}
		:host(:not([toggled])) .revision-right .added-text {
			outline-color: transparent;
			fill: inherit;
		}
	`,Tn([Lt({type:Boolean,reflect:!0})],En.prototype,"toggled",2),En=Tn([xt("gk-revision-navigation-svg")],En);var Bn=Object.defineProperty,In=Object.getOwnPropertyDescriptor;let zn=class extends lit_element_s{render(){return dt`
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 850 290">
				<g class="additions">
					<line x1="39" x2="39" y1="278" y2="276" />
					<line x1="45" x2="45" y1="272" y2="265" />
					<line x1="99" x2="99" y1="264" y2="249" />
					<line x1="106" x2="106" y1="252" y2="225" />
					<line x1="161" x2="161" y1="272" y2="265" />
					<line x1="174" x2="174" y1="278" y2="276" />
					<line x1="228" x2="228" y1="272" y2="265" />
					<line x1="234" x2="234" y1="264" y2="249" />
					<line x1="288" x2="288" y1="278" y2="276" />
					<line x1="342" x2="342" y1="272" y2="265" />
					<line x1="350" x2="350" y1="172" y2="63" />
					<line x1="357" x2="357" y1="249" y2="218" />
					<line x1="364" x2="364" y1="266" y2="254" />
					<line x1="371" x2="371" y1="273" y2="266" />
					<line x1="378" x2="378" y1="273" y2="266" />
					<line x1="385" x2="385" y1="273" y2="266" />
					<line x1="440" x2="440" y1="249" y2="218" />
					<line x1="447" x2="447" y1="249" y2="218" />
					<line x1="454" x2="454" y1="264" y2="249" />
					<line x1="461" x2="461" y1="264" y2="249" />
					<line x1="468" x2="468" y1="273" y2="266" />
					<line x1="475" x2="475" y1="117" y2="20" />
					<line x1="482" x2="482" y1="273" y2="266" />
					<line x1="490" x2="490" y1="273" y2="266" />
					<line x1="497" x2="497" y1="204" y2="129" />
					<line x1="504" x2="504" y1="200" y2="120" />
					<line x1="511" x2="511" y1="200" y2="120" />
					<line x1="518" x2="518" y1="213" y2="145" />
					<line x1="525" x2="525" y1="252" y2="225" />
					<line x1="580" x2="580" y1="278" y2="276" />
					<line x1="587" x2="587" y1="273" y2="266" />
					<line x1="594" x2="594" y1="252" y2="225" />
					<line x1="601" x2="601" y1="247" y2="214" />
					<line x1="608" x2="608" y1="271" y2="263" />
					<line x1="615" x2="615" y1="274" y2="268" />
					<line x1="623" x2="623" y1="271" y2="263" />
					<line x1="677" x2="677" y1="264" y2="249" />
					<line x1="731" x2="731" y1="273" y2="266" />
					<line x1="739" x2="739" y1="252" y2="225" />
					<line x1="743" x2="743" y1="264" y2="249" />
					<line x1="751" x2="751" y1="224" y2="168" />
					<line x1="805" x2="805" y1="278" y2="276" />
				</g>
				<g class="deletions">
					<line x1="39" x2="39" y1="276" y2="289" />
					<line x1="45" x2="45" y1="270" y2="289" />
					<line x1="99" x2="99" y1="262" y2="289" />
					<line x1="106" x2="106" y1="250" y2="289" />
					<line x1="161" x2="161" y1="270" y2="289" />
					<line x1="174" x2="174" y1="276" y2="289" />
					<line x1="228" x2="228" y1="270" y2="289" />
					<line x1="234" x2="234" y1="262" y2="289" />
					<line x1="288" x2="288" y1="276" y2="289" />
					<line x1="342" x2="342" y1="270" y2="289" />
					<line x1="350" x2="350" y1="170" y2="289" />
					<line x1="357" x2="357" y1="249" y2="289" />
					<line x1="364" x2="364" y1="264" y2="289" />
					<line x1="371" x2="371" y1="271" y2="289" />
					<line x1="378" x2="378" y1="271" y2="289" />
					<line x1="385" x2="385" y1="271" y2="289" />
					<line x1="440" x2="440" y1="247" y2="289" />
					<line x1="447" x2="447" y1="247" y2="289" />
					<line x1="454" x2="454" y1="262" y2="289" />
					<line x1="461" x2="461" y1="262" y2="289" />
					<line x1="468" x2="468" y1="271" y2="289" />
					<line x1="475" x2="475" y1="115" y2="289" />
					<line x1="482" x2="482" y1="271" y2="289" />
					<line x1="490" x2="490" y1="271" y2="289" />
					<line x1="497" x2="497" y1="202" y2="289" />
					<line x1="504" x2="504" y1="198" y2="289" />
					<line x1="511" x2="511" y1="198" y2="289" />
					<line x1="518" x2="518" y1="211" y2="289" />
					<line x1="525" x2="525" y1="250" y2="289" />
					<line x1="580" x2="580" y1="276" y2="289" />
					<line x1="587" x2="587" y1="271" y2="289" />
					<line x1="594" x2="594" y1="250" y2="289" />
					<line x1="601" x2="601" y1="245" y2="289" />
					<line x1="608" x2="608" y1="269" y2="289" />
					<line x1="615" x2="615" y1="272" y2="289" />
					<line x1="623" x2="623" y1="269" y2="289" />
					<line x1="677" x2="677" y1="262" y2="289" />
					<line x1="731" x2="731" y1="271" y2="289" />
					<line x1="739" x2="739" y1="250" y2="289" />
					<line x1="743" x2="743" y1="262" y2="289" />
					<line x1="751" x2="751" y1="222" y2="289" />
					<line x1="805" x2="805" y1="276" y2="289" />
				</g>
				<g class="lane1">
					<line class="grid-line" x1="39" x2="809" y1="99" y2="99" />
					<circle cx="39" cy="99" r="4" />
					<circle cx="45" cy="99" r="8" />
					<circle cx="99" cy="99" r="17" />
					<circle cx="106" cy="99" r="29" />
					<circle cx="174" cy="99" r="4" />
					<circle cx="350" cy="99" r="96" />
					<circle cx="364" cy="99" r="12" />
					<circle cx="378" cy="99" r="8" />
					<circle cx="385" cy="99" r="8" />
					<circle cx="447" cy="99" r="32" />
					<circle cx="461" cy="99" r="17" />
					<circle cx="468" cy="99" r="8" />
					<circle cx="475" cy="99" r="100" />
					<circle cx="482" cy="99" r="8" />
					<circle cx="490" cy="99" r="8" />
					<circle cx="497" cy="99" r="67" />
					<circle cx="504" cy="99" r="71" />
					<circle cx="511" cy="99" r="71" />
					<circle cx="518" cy="99" r="61" />
					<circle cx="525" cy="99" r="29" />
					<circle cx="580" cy="99" r="4" />
					<circle cx="594" cy="99" r="29" />
					<circle cx="677" cy="99" r="17" />
					<circle cx="731" cy="99" r="8" />
					<circle cx="739" cy="99" r="29" />
				</g>
				<g class="lane2">
					<line class="grid-line" x1="39" x2="809" y1="154" y2="154" />
					<circle cx="161" cy="154" r="8" />
					<circle cx="228" cy="154" r="8" />
					<circle cx="234" cy="154" r="17" />
					<circle cx="288" cy="154" r="4" />
					<circle cx="342" cy="154" r="8" />
					<circle cx="357" cy="154" r="31" />
					<circle cx="371" cy="154" r="8" />
					<circle cx="385" cy="154" r="8" />
					<circle cx="440" cy="154" r="32" />
					<circle cx="454" cy="154" r="17" />
					<circle cx="587" cy="154" r="8" />
					<circle cx="601" cy="154" r="33" />
					<circle cx="608" cy="154" r="9" />
					<circle cx="615" cy="154" r="7" />
					<circle cx="623" cy="154" r="9" />
					<circle cx="743" cy="154" r="17" />
					<circle cx="751" cy="154" r="50" />
					<circle cx="805" cy="154" r="4" />
				</g>
			</svg>
		`}};zn.styles=_e`
		:host {
			--color-lane1: #7101ff;
			--color-lane2: #f90;
		}

		:host > svg {
			display: block;
			max-width: 69.2rem;
			width: calc(100% - 2rem);
			height: auto;
			margin: 0 1rem;

			border: 0.1rem solid var(--vscode-editorWidget-border);
		}

		* {
			user-select: none;
		}

		.additions line {
			stroke: var(--vscode-gitlens-decorations-addedForegroundColor, #339e3e);
			stroke-width: 1.2;
		}

		.deletions line {
			stroke: var(--vscode-gitlens-decorations-deletedForegroundColor, #9e2716);
			stroke-width: 1.2;
		}

		.grid-line {
			stroke: var(--vscode-editorWidget-border, #474747);
			stroke-dasharray: 4.5 4.5;
		}

		.lane1 circle {
			fill: var(--color-lane1);
			opacity: 0.3;
		}

		.lane1 circle:hover {
			cursor: pointer;
			opacity: 0.8;
		}

		.lane2 circle {
			fill: var(--color-lane2);
			opacity: 0.3;
		}

		.lane2 circle:hover {
			cursor: pointer;
			opacity: 0.8;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--color-lane1: #007acc;
			--color-lane2: #ea5c00;
		}
	`,zn=((e,t,o,i)=>{for(var s,r=i>1?void 0:i?In(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Bn(t,o,r),r})([xt("gk-timeline-svg")],zn);var Wn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor;let Gn=class extends lit_element_s{render(){return dt`
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- a-prettier-ignore -->
			<svg width="850" height="290" viewBox="0 0 850 290" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g>
					<rect x="0" y="0" width="100%" height="44" class="header-box" />
					<text x="10" y="28" class="header">
						<tspan dy="4" class="codicon">&#xeab4;</tspan>
						<tspan dx="6" dy="-4">GITKRAKEN WORKSPACES</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="45" width="100%" height="44" class="row-box-selected" />
					<text x="30" y="71" class="selected">
						<tspan dx="2" dy="4" class="codicon">&#xeab4;</tspan>
						<tspan dx="24" class="codicon">&#xebaa;</tspan>
						<tspan dx="10" dy="-4">Client apps</tspan>
					</text>
					<text x="100%" y="71" text-anchor="end" class="selected">
						<tspan dx="-10" dy="4" class="codicon">&#xea60;</tspan>
						<tspan dx="12" class="codicon">&#xeb1a;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="90" width="100%" height="44" class="row-box" />
					<text x="50" y="116">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xea83;</tspan>
						<tspan dx="10" dy="-4">vscode-gitlens</tspan>
						<tspan dx="4" class="small">0</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xea9d;</tspan>
						<tspan dx="-4" dy="-6" class="small">1</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xeaa0;</tspan>
						<tspan dx="-3" dy="-6" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">main</tspan>
						<tspan dx="1" dy="0" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">Last fetched 6/9/23</tspan>
					</text>
					<text x="100%" y="116" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xeaa1;</tspan>
						<tspan dx="12" class="codicon">&#xea9a;</tspan>
						<tspan dx="12" class="codicon">&#xeb37;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="135" width="100%" height="44" class="row-box" />
					<text x="50" y="162">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xea83;</tspan>
						<tspan dx="10" dy="-4">GitKraken</tspan>
						<tspan dx="4" class="small">1</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xea9d;</tspan>
						<tspan dx="-4" dy="-6" class="small">0</tspan>
						<tspan dx="-8" dy="6" class="codicon">&#xeaa0;</tspan>
						<tspan dx="-3" dy="-6" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">development</tspan>
						<tspan dx="1" dy="0" class="desc">•</tspan>
						<tspan dx="1" dy="0" class="desc">Last fetched 6/7/23</tspan>
					</text>
					<text x="100%" y="162" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xeaa1;</tspan>
						<tspan dx="12" class="codicon">&#xea9a;</tspan>
						<tspan dx="12" class="codicon">&#xeb37;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="179" width="100%" height="44" class="row-box" />
					<text x="30" y="209">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xebaa;</tspan>
						<tspan dx="10" dy="-4">Backend services</tspan>
					</text>
					<text x="100%" y="209" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xea60;</tspan>
						<tspan dx="12" class="codicon">&#xeb1a;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
				<g class="row">
					<rect x="0" y="223" width="100%" height="44" class="row-box" />
					<text x="30" y="253">
						<tspan dx="2" dy="4" class="codicon">&#xeab6;</tspan>
						<tspan dx="24" class="codicon">&#xebaa;</tspan>
						<tspan dx="10" dy="-4">Open source projects</tspan>
					</text>
					<text x="100%" y="253" text-anchor="end" class="row-actions">
						<tspan dx="-10" dy="4" class="codicon">&#xea60;</tspan>
						<tspan dx="12" class="codicon">&#xeb1a;</tspan>
						<tspan dx="12" class="codicon">&#xeae4;</tspan>
					</text>
				</g>
			</svg>
		`}};Gn.styles=[Ln,kn,_e`
			text {
				fill: var(--vscode-foreground);
				font-size: 18px;
			}
			.header {
				font-weight: 700;
			}

			.codicon {
				font-family: codicon;
				cursor: default;
				user-select: none;
				font-size: 20px;
			}

			.glicon {
				font-family: glicons;
				cursor: default;
				user-select: none;
			}
			.desc {
				font-size: 0.9em;
				opacity: 0.6;
			}
			.small {
				font-size: 0.9em;
			}
			.header-box {
				fill: var(--vscode-sideBarSectionHeader-background);
			}
			.row-box {
				fill: var(--vscode-list-hoverBackground);
				opacity: 0;
			}
			.row {
				cursor: pointer;
			}
			.row:hover .row-box {
				opacity: 1;
			}
			.row-box-selected {
				fill: var(--vscode-list-activeSelectionBackground);
				stroke: var(--vscode-list-focusOutline);
				stroke-width: 1;
			}
			.selected {
				fill: var(--vscode-list-activeSelectionForeground);
			}
			.row:not(:hover) .row-actions {
				display: none;
			}
			.link {
				fill: var(--vscode-textLink-foreground);
			}
			.link:hover {
				text-decoration: underline;
			}
			.addition {
				fill: var(--vscode-gitDecoration-addedResourceForeground);
			}
			.deletion {
				fill: var(--vscode-gitDecoration-deletedResourceForeground);
			}
		`],Gn=((e,t,o,i)=>{for(var s,r=i>1?void 0:i?Un(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Wn(t,o,r),r})([xt("gk-workspaces-svg")],Gn);var jn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Nn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?qn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&jn(t,o,r),r};let Qn=class extends lit_element_s{render(){return dt` <a
			class="video-button"
			href="https://youtu.be/oJdlGtsbc3U?utm_source=inapp&amp;utm_medium=welcome_banner&amp;utm_id=GitLens+tutorial"
			aria-label="Watch the Tutorial video"
		>
			<img class="background" .src=${this.src} alt="Video thumbnail" />
			<span class="title">Tutorial Video</span>
			<!-- Don't reformat or let prettier reformat the SVG otherwise whitespace will get added incorrect and screw up the positioning -->
			<!-- prettier-ignore -->
			<svg class="play" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M13.8626 11.0319C14.3464 10.5343 24.5 16.0074 24.5 17.5C24.5 18.9926 14.346 24.4657 13.8627 23.9681C13.3794 23.4706 13.3788 11.5294 13.8626 11.0319Z"
					fill="currentColor"
				></path>
				<path
					d="M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
					stroke="#DE98FF"
				></path>
			</svg>
		</a>`}};Qn.styles=[Dt,_e`
			:host {
				--video-button-background: #01000a;
				--video-button-foreground: #fff;
				display: block;
			}

			.video-button {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: var(--video-button-background);
				padding: 0 2rem 0 1rem;
				color: var(--video-button-foreground);
				transition: background-color ease-in-out 150ms;
				border-radius: 0.4rem;
				position: relative;
				overflow: hidden;
				height: 70px;
				text-decoration: none;
			}

			.video-button .play {
				transform: scale(1.2);
				transition: transform ease-in-out 150ms;
			}
			.video-button:hover .play {
				transform: scale(1.4);
			}

			.background {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
				transition: transform ease-in-out 150ms;
			}
			.video-button:hover .background {
				transform: translateX(-3px) scale(1.05);
			}

			.background__base {
				fill: var(--video-button-background);
				transition: fill ease-in-out 150ms;
			}
			.video-button:hover .background__base {
				opacity: 0.5;
			}

			.title {
				/* position: absolute; */
				align-self: center;
				color: var(--video-button-foreground);
				font-weight: 400;
				text-shadow:
					0 0 5px rgba(0, 0, 0, 1),
					0 0 10px rgba(0, 0, 0, 1),
					0 0 15px rgba(0, 0, 0, 1);
				transform: scale(1.2);
				transform-origin: left;
				transition: transform ease-in-out 150ms;
				z-index: 1;
			}
			.video-button:hover .title {
				transform: scale(1.4);
			}
		`],Nn([Lt({reflect:!0})],Qn.prototype,"src",2),Qn=Nn([xt("video-button")],Qn);const Kn=_e`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,Jn=_e`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var Yn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,es=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Xn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Yn(t,o,r),r};let ts=class extends lit_element_s{constructor(){super(...arguments),this.pulse=!1}render(){return dt`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};ts.styles=[Kn,Jn],es([Lt({type:Boolean})],ts.prototype,"pulse",2),ts=es([xt("gl-indicator")],ts);class WelcomeApp extends App{constructor(){super("WelcomeApp")}onInitialize(){this.updateState()}onBind(){const e=[...super.onBind?.()??[],G.on("[data-feature]","change",((e,t)=>this.onFeatureToggled(e,t))),G.on('[data-requires="repo"]',"click",((e,t)=>this.onRepoFeatureClicked(e,t)))];return e}onMessageReceived(e){switch(!0){case l.is(e):this.state=e.params.state,this.setState(this.state),this.updateState();break;case C.is(e):this.state.orgSettings=e.params.orgSettings,this.setState(this.state),this.updateOrgSettings();break;default:super.onMessageReceived?.(e)}}onRepoFeatureClicked(e,t){return!this.state.repoFeaturesBlocked||(e.preventDefault(),e.stopPropagation(),!1)}onFeatureToggled(e,t){const o=t.dataset.feature;if(!o)return;let i;switch(o){case"blame":i="currentLine";break;case"codelens":i="codeLens";break;default:return}const s=t.checked;this.state.config[i]=s,this.sendCommand(a,{type:i,value:s}),this.updateFeatures()}updateState(){this.updateVersion(),this.updateFeatures(),this.updateRepoState(),this.updateAccountState(),this.updatePromo(),this.updateSource(),this.updateOrgSettings()}updateOrgSettings(){const{orgSettings:{drafts:e,ai:t}}=this.state;document.body.dataset.orgDrafts=e?"allowed":"blocked",document.body.dataset.orgAi=t?"allowed":"blocked"}updatePromo(){const{canShowPromo:e}=this.state;document.getElementById("promo").hidden=!e}updateSource(){const e=document.querySelectorAll("gl-feature-badge");for(const t of e)t.source={source:"welcome",detail:"badge"}}updateVersion(){document.getElementById("version").textContent=this.state.version}updateFeatures(){const{config:e}=this.state,t=document.getElementById("blame");t.inline=e.currentLine??!1,t.codelens=e.codeLens??!1;let o=document.getElementById("inline-blame");o.checked=e.currentLine??!1,o=document.getElementById("codelens"),o.checked=e.codeLens??!1}updateRepoState(){const{repoFeaturesBlocked:e}=this.state;document.body.dataset.repos=e?"blocked":"allowed"}updateAccountState(){const{isTrialOrPaid:e}=this.state;for(const t of document.querySelectorAll('[data-visible="try-pro"]'))t.hidden=e??!1}}new WelcomeApp;var os=t.a;export{os as WelcomeApp};